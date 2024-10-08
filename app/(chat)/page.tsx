import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'
import  Navtabs  from '@/components/ui/Navtabs'

export const metadata = {
  title: 'Next.js AI Chatbot'
}

export default async function IndexPage() {
  const id = nanoid()
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <div className="bg-[#001219] grid grid-cols-2 w-screen">
        <Navtabs />
        <Chat id={id} session={session} missingKeys={missingKeys} />
      </div>
    </AI>
  )
}
