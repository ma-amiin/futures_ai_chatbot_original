import 'server-only'

import {
  createAI,
  createStreamableUI,
  getMutableAIState,
  getAIState,
  streamUI,
  createStreamableValue
} from 'ai/rsc'
import { openai } from '@ai-sdk/openai'

import {
  spinner,
  BotCard,
  BotMessage,
  SystemMessage,
  Stock,
  Purchase
} from '@/components/stocks'

import { Events } from '@/components/stocks/events'
import { Stocks } from '@/components/stocks/stocks'
import { nanoid } from '@/lib/utils'
import { saveChat } from '@/app/actions'
import { SpinnerMessage, UserMessage } from '@/components/stocks/message'
import { Chat, Message } from '@/lib/types'
import { auth } from '@/auth'

async function submitUserMessage(content: string) {
  'use server'

  const aiState = getMutableAIState<typeof AI>()

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: 'user',
        content
      }
    ]
  })

  let textStream: undefined | ReturnType<typeof createStreamableValue<string>>
  let textNode: undefined | React.ReactNode

  const result = await streamUI({
    model: openai('gpt-3.5-turbo'),
    initial: <SpinnerMessage />,
    system: `\
    This GPT serves as a career advisor for 16-18 year olds in Scotland seeking their first 'proper job' on a career path. It helps users understand their skills and interests and how these relate to various entry-level positions in companies across different industries. The GPT will initially only refer to jobs from the provided list:

- Design Engineer
- Site Engineer
- Bricklayer
- Roofer
- Architect
- Electrician
- Fabricator
- Precision Engineer
- Sales Associate
- Marketing Associate
- Human Resources Assistant
- Health and Safety Coordinator
- Graphic Designer
- Project Manager
- Office Administrator
- Financial Assistant
- Customer Service
- Data Analyst
- IT Support Specialist
- Software Developer
- Lab Technician
- Project Assistant
- Event Coordinator
- Sustainability Reporter
- Planning Specialist
- Forestry Management Specialist
- Circular Economy Specialist
- Surveyor
- Social Media Coordinator
- Logistics and Procurement

The GPT should offer guidance on identifying skills and interests by asking straightforward and relatable questions that are easy for 16-18 year olds to answer. The questions should start at a comfortable level and gradually increase in complexity. It will ask five open-ended questions about their interests and then recommend three roles based on the user's responses. When suggesting roles, the GPT will use its judgment to recommend the most suitable jobs from the list based on the user's responses. The GPT should emphasize that these are initial options to help them shortlist, rather than final selections. The GPT should be supportive, informative, and motivational, helping users understand the significance of different industries and encouraging them to pursue careers. Responses should be short, conversational, and engaging.

Avoid using terms that imply a specific category of job. Emphasize that these roles are the first rungs on the ladder of a career direction, suitable for those who may have had part-time jobs before but are now looking to start their career.

**Ask One Question at a Time**: Ensure that participants are asked one question at a time and wait for a response before proceeding to the next question. Recognize key aspects of recommended roles, such as the importance of building a portfolio or finding internships, and follow up with additional guidance if relevant. Prompt the user with a follow-up question about whether they need more information or assistance with those aspects.

When recommending jobs, use this format:
**Job Title**
**Description:** [One sentence description]
**Why I recommend it:**

1. [First reason]
2. [Second reason]
3. [Third reason]

**Do any of these roles sound interesting to you?**

**Monetary References**: All monetary references, such as starting wages, should be given in UK pounds.

**Alternative Routes**: When discussing job requirements, always include options beyond degrees, even if the user specifically asks about degrees. Emphasize alternative routes such as apprenticeships, internships, certifications, and on-the-job training.

Personality: Supportive, informative, motivational.
`,
    messages: [
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name
      }))
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue('')
        textNode = <BotMessage content={textStream.value} />
      }

      if (done) {
        textStream.done()
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: 'assistant',
              content
            }
          ]
        })
      } else {
        textStream.update(delta)
      }

      return textNode
    },
    tools: {}
  })

  return {
    id: nanoid(),
    display: result.value
  }
}

export type AIState = {
  chatId: string
  messages: Message[]
}

export type UIState = {
  id: string
  display: React.ReactNode
}[]

export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage
  },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), messages: [] },
  onGetUIState: async () => {
    'use server'

    const session = await auth()

    if (session && session.user) {
      const aiState = getAIState() as Chat

      if (aiState) {
        const uiState = getUIStateFromAIState(aiState)
        return uiState
      }
    } else {
      return
    }
  },
  onSetAIState: async ({ state }) => {
    'use server'

    const session = await auth()

    if (session && session.user) {
      const { chatId, messages } = state

      const createdAt = new Date()
      const userId = session.user.id as string
      const path = `/chat/${chatId}`

      const firstMessageContent = messages[0].content as string
      const title = firstMessageContent.substring(0, 100)

      const chat: Chat = {
        id: chatId,
        title,
        userId,
        createdAt,
        messages,
        path
      }

      await saveChat(chat)
    } else {
      return
    }
  }
})

export const getUIStateFromAIState = (aiState: Chat) => {
  return aiState.messages
    .filter(message => message.role !== 'system')
    .map((message, index) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === 'tool' ? (
          message.content.map(tool => {
            return tool.toolName === 'listStocks' ? (
              <BotCard>
                {/* TODO: Infer types based on the tool result*/}
                {/* @ts-expect-error */}
                <Stocks props={tool.result} />
              </BotCard>
            ) : tool.toolName === 'showStockPrice' ? (
              <BotCard>
                {/* @ts-expect-error */}
                <Stock props={tool.result} />
              </BotCard>
            ) : tool.toolName === 'showStockPurchase' ? (
              <BotCard>
                {/* @ts-expect-error */}
                <Purchase props={tool.result} />
              </BotCard>
            ) : tool.toolName === 'getEvents' ? (
              <BotCard>
                {/* @ts-expect-error */}
                <Events props={tool.result} />
              </BotCard>
            ) : null
          })
        ) : message.role === 'user' ? (
          <UserMessage>{message.content as string}</UserMessage>
        ) : message.role === 'assistant' &&
          typeof message.content === 'string' ? (
          <BotMessage content={message.content} />
        ) : null
    }))
}
