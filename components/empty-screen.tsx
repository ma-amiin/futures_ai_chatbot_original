import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 justify-center align-middle self-center rounded-lg border bg-[#555555] p-8">
        <h1 className="text-lg text-white self-center font-semibold">Powering Futures Advisor</h1>
        {/* <p className="leading-normal text-white text-lg">
          Here to help you make your next step
        </p> */}
        {/* <p className="leading-normal text-white text-lg">More text here</p> */}
      </div>
    </div>
  )
}
