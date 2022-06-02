import React from 'react'

import Image from 'next/image'

import { Match } from '@/entities'

export const ChatList = (): React.ReactElement => {
  const matches: Match[] = [
    {
      matchID: 'match1',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user1',
      profileImageURL: '/images/katame.jpeg',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    },
    {
      matchID: 'match2',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user2',
      profileImageURL: '/images/katame.jpeg',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    },
    {
      matchID: 'match3',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user3',
      profileImageURL: '/images/katame.jpeg',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    },
    {
      matchID: 'match4',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user4',
      profileImageURL: '/images/katame.jpeg',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    },
    {
      matchID: 'match5',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user5',
      profileImageURL: '/images/katame.jpeg',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    }
  ]
  return (
    <div className="h-96">
      <h2 className="mb-4 text-xl font-bold">メッセージ</h2>
      <div className="flex overflow-scroll flex-col gap-4 w-full h-full">
        {matches.map((match) => (
          <div
            key={match.matchID}
            className="pb-4 border-b border-stone-500 border-solid"
          >
            <MatchIcon match={match} />
          </div>
        ))}
      </div>
    </div>
  )
}

type MatchIconProps = {
  match: Match
}

const MatchIcon = ({ match }: MatchIconProps): React.ReactElement => (
  <div className="flex shrink-0 gap-4 items-center w-full h-24">
    <div className="w-24 avatar">
      <div className="w-24 h-24 rounded-full">
        <Image
          className="rounded-full"
          src={match.profileImageURL}
          alt={match.username}
          layout="fill"
        />
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-lg font-bold">{match.username}</span>
      <p className="text-sm text-stone-400">{match.lastMessage}</p>
    </div>
  </div>
)
