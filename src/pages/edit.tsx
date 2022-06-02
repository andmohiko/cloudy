import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

import { MotivationInput } from '@/components/Inputs/MotivationInput'
import { SelfIntroductionInput } from '@/components/Inputs/SelfIntroductionInput'
import { UserBasicInfoInput } from '@/components/Inputs/UserBasicInfoInput'
import { HomeLayout } from '@/components/Layouts/HomeLayout'

const MyPage: NextPage = () => {
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
