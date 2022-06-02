import Image from 'next/image'
import { AiOutlineSetting, AiOutlineCamera } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'

import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

import { HomeLayout } from '@/components/Layouts/HomeLayout'
import { User } from '@/entities'

const MyPage: NextPage = () => {
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
        <div className="flex flex-col gap-8">
          <div className="w-48 h-48 avatar">
            <div className="w-full h-auto rounded-full ring ring-offset-2 ring-primary ring-offset-base-100">
              <Image
                className="rounded-full"
                src={user.profileImageURL}
                alt={user.username}
                layout="fill"
              />
            </div>
          </div>
          <span className="text-2xl text-center">{user.username}</span>

          <div className="flex gap-8">
            <button className="btn btn-circle">
              <AiOutlineSetting size={24} />
            </button>
            <button className="btn btn-circle">
              <AiOutlineCamera size={24} />
            </button>
            <button className="btn btn-circle">
              <BsPencil size={24} />
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default MyPage
