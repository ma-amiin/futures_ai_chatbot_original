import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Powering Futures Advisor</h1>
        <p className="leading-normal text-muted-foreground">
          Here to help you make your next step
        </p>
        <p className="leading-normal text-muted-foreground">More text here</p>
      </div>
    </div>
  )
}
