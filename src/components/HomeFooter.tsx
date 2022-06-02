import React from 'react'

import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { BiHomeHeart } from 'react-icons/bi'
import { BsChatDots } from 'react-icons/bs'

export const HomeFooter = (): React.ReactElement => {
  return (
    <div className="fixed bottom-0 z-30 navbar bg-base-100">
      <Link href={'/'}>
        <button className="container flex-col gap-1 mx-auto">
          <BiHomeHeart size={24} />
          <span className="text-xs">ホーム</span>
        </button>
      </Link>
      <Link href={'/chats'}>
        <button className="container flex-col gap-1 mx-auto">
          <BsChatDots size={24} />
          <span className="text-xs">チャット</span>
        </button>
      </Link>
      <Link href={'/mypage'}>
        <button className="container flex-col gap-1 mx-auto">
          <AiOutlineUser size={24} />
          <span className="text-xs">マイページ</span>
        </button>
      </Link>
    </div>
  )
}
