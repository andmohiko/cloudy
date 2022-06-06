import React from 'react'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { Chat, User } from '@/entities'

interface Props {
  user: User
  chat: Chat
  isMine: boolean
}

export const ChatBubble = ({
  user,
  chat,
  isMine
}: Props): React.ReactElement => {
  return (
    <div className="flex items-end">
      {isMine && (
        <Link href={`/user/${user.userID}`}>
          <div className="shrink-0 w-8 h-8 avatar">
            <Image
              src={user.profileImageURL}
              alt={user.username}
              layout="fill"
              className="rounded-full"
            />
          </div>
        </Link>
      )}
      <div
        className={classNames(
          'p-2 mx-2 bg-black rounded-lg',
          { 'mr-16': isMine },
          { 'ml-16': !isMine }
        )}
      >
        <p className="whitespace-pre-wrap">{chat.message}</p>
      </div>
      {!isMine && (
        <Link href={`/user/${user.userID}`}>
          <div className="shrink-0 w-8 h-8 avatar">
            <Image
              src={user.profileImageURL}
              alt={user.username}
              layout="fill"
              className="rounded-full"
            />
          </div>
        </Link>
      )}
    </div>
  )
}
