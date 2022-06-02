import Image from 'next/image'
import { useRouter } from 'next/router'
import { GoLocation } from 'react-icons/go'

import type { NextPage } from 'next'

import { HomeLayout } from '@/components/Layouts/HomeLayout'
import { LikeAction } from '@/components/LikeAction'
import { User } from '@/entities'
import styles from '@/styles/Home.module.css'

const UserPage: NextPage = () => {
  const router = useRouter()
  const { id: userID } = router.query

  const user: User = {
    userID: 'user1',
    age: 21,
    location: '池袋',
    profileImageURL: '/images/katame.jpeg',
    selfIntroduction:
      'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
    username: 'りあ'
  }

  return (
    <HomeLayout>
      <div className={styles.main}>
        <div className="flex flex-col gap-4 w-96 h-screen">
          <div className="h-96 rounded-xl avatar">
            <div className="rounded-xl">
              <Image
                src={user.profileImageURL}
                alt={user.username}
                layout="fill"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 px-2">
            <div className="text-4xl">
              {user.username} <span className="text-xl">({user.age})</span>
            </div>
            <div className="flex gap-2 items-center text-lg">
              <GoLocation />
              {user.location}
            </div>
            <div className="selfIntroduction">{user.selfIntroduction}</div>
          </div>
        </div>
        <div className="fixed bottom-16 z-40">
          <LikeAction />
        </div>
      </div>
    </HomeLayout>
  )
}

export default UserPage
