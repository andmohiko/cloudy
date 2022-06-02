import type { NextPage } from 'next'

import { ChatList } from '@/components/ChatList'
import { HomeLayout } from '@/components/Layouts/HomeLayout'
import { MatchList } from '@/components/MatchList'
import styles from '@/styles/Home.module.css'

const ChatsPage: NextPage = () => {
  return (
    <HomeLayout>
      <div className={styles.main}>
        <div className="px-2 w-96">
          <div className="fixed top-20 z-30">
            <MatchList />
          </div>
          <div className="mt-36">
            <ChatList />
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default ChatsPage
