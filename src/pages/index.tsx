import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

import { HomeLayout } from '@/components/Layouts/HomeLayout'
import { UserCard } from '@/components/UserCard'
import { User } from '@/entities'

const Home: NextPage = () => {
  const users: User[] = [
    {
      userID: 'user1',
      age: 21,
      location: '池袋',
      profileImageURL: '/images/splash.png',
      selfIntroduction:
        'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
      username: 'りあ'
    },
    {
      userID: 'user2',
      age: 21,
      location: '池袋',
      profileImageURL: '/images/splash.png',
      selfIntroduction:
        'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
      username: 'りあ'
    },
    {
      userID: 'user3',
      age: 21,
      location: '池袋',
      profileImageURL: '/images/splash.png',
      selfIntroduction:
        'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
      username: 'りあ'
    },
    {
      userID: 'user4',
      age: 21,
      location: '池袋',
      profileImageURL: '/images/splash.png',
      selfIntroduction:
        'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
      username: 'りあ'
    }
  ]

  return (
    <HomeLayout>
      <div className="stack">
        {users.map((user) => (
          <UserCard key={user.userID} user={user} />
        ))}
      </div>
    </HomeLayout>
  )
}

export default Home
