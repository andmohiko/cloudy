import React from 'react'

import Router from 'next/router'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { IoIosArrowBack } from 'react-icons/io'

type Props = {
  pageTitle: string
}

export const ChatHeader = ({ pageTitle }: Props): React.ReactElement => {
  return (
    <div className="justify-between px-4 w-[520px] navbar bg-base-200">
      <button
        onClick={() => Router.back()}
        className="h-10 cursor-pointer w-1h avatar"
      >
        <IoIosArrowBack size={28} />
      </button>

      <div>
        <span className="text-xl font-bold">{pageTitle}</span>
      </div>

      <div>
        <BiDotsHorizontalRounded size={32} />
      </div>
    </div>
  )
}
