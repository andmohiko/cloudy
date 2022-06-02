import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

import { HomeLayout } from '@/components/Layouts/HomeLayout'
import { UserCard } from '@/components/UserCard'

const Home: NextPage = () => {
  const users: User[] = [
    {
      userID: 'user1',
      profileImageURL: '/images/katame.jpeg',
      selfIntroduction:
        'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
      username: 'りあ'
    },
    {
      userID: 'user2',
      profileImageURL: '/images/katame.jpeg',
      selfIntroduction:
        'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
      username: 'りあ'
    },
    {
      userID: 'user3',
      profileImageURL: '/images/katame.jpeg',
      selfIntroduction:
        'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
      username: 'りあ'
    },
    {
      userID: 'user4',
      profileImageURL: '/images/katame.jpeg',
      selfIntroduction:
        'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
      username: 'りあ'
    }
  ]

  return (
    <HomeLayout>
      <main className={styles.main}>
        <div className="stack">
          {users.map((user) => (
            <UserCard key={user.userID} user={user} />
          ))}
        </div>
      </main>
    </HomeLayout>
  )
}

export default Home
