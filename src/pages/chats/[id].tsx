import type { NextPage } from 'next'

import { ChatBubble } from '@/components/ChatBubble'
import { ChatLayout } from '@/components/Layouts/ChatLayout'
import { Chat, me, myChat, User } from '@/entities'

const ChatPage: NextPage = () => {
  const user: User = me
  const chat: Chat = myChat

  return (
    <ChatLayout>
      <div className="p-2">
        <ChatBubble user={user} chat={chat} isMine={true} />
        <ChatBubble user={user} chat={chat} isMine={false} />
      </div>
    </ChatLayout>
  )
}

export default ChatPage
