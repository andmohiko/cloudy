import Image from 'next/image'
import { AiOutlineSetting, AiOutlineCamera } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'

import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

import { MotivationInput } from '@/components/Inputs/MotivationInput'
import { SelfIntroductionInput } from '@/components/Inputs/SelfIntroductionInput'
import { UserBasicInfoInput } from '@/components/Inputs/UserBasicInfoInput'
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
          <UserBasicInfoInput />
          <MotivationInput />
          <SelfIntroductionInput />
        </div>
      </div>
    </HomeLayout>
  )
}

export default MyPage
