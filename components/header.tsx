import * as React from 'react'
import Image from 'next/image'
import PW from 'public/powering-futures.png'

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 flex bg-primary w-full h-16 px-4 border-b shrink-0 ">
        <Image src={PW} alt={'Powering Future'} width={100} height={50} />
      </header>
    </>
  )
}
  