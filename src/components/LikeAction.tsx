import React from 'react'

import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'

export const LikeAction = (): React.ReactElement => {
  return (
    <div className="w-[520px] h-48 shadow-xl bg-base-200 ">
      <div className="gap-6 items-center card-body">
        <p className="flex flex-col text-center ">
          <span className="text-xl font-bold">りあさんのプロフィールを</span>
          <span>相性のよさそうな友達にシェアしよう</span>
        </p>
        <div className="card-actions">
          <div className="flex gap-12 items-center">
            <button className="btn btn-lg btn-circle">
              <IoClose size={36} />
            </button>
            <button className="btn btn-circle">
              <AiFillStar size={30} />
            </button>
            <button className="btn btn-lg btn-circle">
              <AiFillHeart size={36} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
