import * as React from 'react'
import Image from 'next/image'
import PW from 'public/powering-futures.png'

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 flex bg-primary w-full h-24 px-4 shrink-0 ">
        <Image src={PW} alt={'Powering Future'} width={200} height={50} />
      </header>
    </>
  )
}
