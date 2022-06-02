import React from 'react'

import Image from 'next/image'

import { Match } from '@/entities'

export const MatchList = (): React.ReactElement => {
  const matches: Match[] = [
    {
      matchID: 'match1',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user1',
      profileImageURL: '/images/splash.png',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    },
    {
      matchID: 'match2',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user2',
      profileImageURL: '/images/splash.png',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    },
    {
      matchID: 'match3',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user3',
      profileImageURL: '/images/splash.png',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    },
    {
      matchID: 'match4',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user4',
      profileImageURL: '/images/splash.png',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    },
    {
      matchID: 'match5',
      createdAt: new Date(2022, 5, 1, 22, 0, 0),
      lastMessage: '電話しよ！',
      lastMessageAt: new Date(2022, 5, 1, 22, 0, 0),
      userID: 'user5',
      profileImageURL: '/images/splash.png',
      updatedAt: new Date(2022, 5, 1, 22, 0, 0),
      username: 'りあ'
    }
  ]
  return (
    <div className="">
      <h2 className="mb-4 text-xl font-bold">新しいマッチ</h2>
      <div className="flex overflow-auto gap-6 w-screen h-full">
        {matches.map((match) => (
          <MatchIcon key={match.matchID} match={match} />
        ))}
      </div>
    </div>
  )
}

type MatchIconProps = {
  match: Match
}

const MatchIcon = ({ match }: MatchIconProps): React.ReactElement => (
  <div className="flex flex-col shrink-0 gap-1 w-24">
    <div className="avatar">
      <div className="w-full rounded-full">
        <Image
          className="rounded-full"
          src={match.profileImageURL}
          alt={match.username}
          layout="fill"
        />
      </div>
    </div>
    <span className="text-center">{match.username}</span>
  </div>
)
