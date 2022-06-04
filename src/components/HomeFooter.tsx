import React from 'react'

import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiHomeHeart } from 'react-icons/bi'
import { BsChatDots } from 'react-icons/bs'

export const HomeFooter = (): React.ReactElement => {
  return (
    <div className="w-[520px] navbar bg-base-100">
      <Link href={'/'}>
        <button className="container justify-center mx-auto">
          <BiHomeHeart size={30} />
        </button>
      </Link>
      <Link href={'/'}>
        <button className="container justify-center mx-auto">
          <AiOutlineSearch size={30} />
        </button>
      </Link>
      <Link href={'/chats'}>
        <button className="container justify-center mx-auto">
          <BsChatDots size={30} />
        </button>
      </Link>
    </div>
  )
}
