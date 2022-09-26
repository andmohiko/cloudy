import type { NextPage } from 'next'

import { ChatList } from '@/components/ChatList'
import { HomeLayout } from '@/components/Layouts/HomeLayout'
import { MatchList } from '@/components/MatchList'
import styles from '@/styles/Home.module.css'

const ChatsPage: NextPage = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col gap-6 px-2">
        <MatchList />
        <ChatList />
      </div>
    </HomeLayout>
  )
}

export default ChatsPage
