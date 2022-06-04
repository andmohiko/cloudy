export type Uid = string
export type DocumentID = string

export interface User {
  userID: Uid
  age: number
  location: string
  profileImageURL: string
  selfIntroduction: string
  username: string
}

export interface Match {
  matchID: DocumentID
  createdAt: Date
  lastMessage: Chat['message']
  lastMessageAt: Chat['createdAt']
  profileImageURL: User['profileImageURL']
  updatedAt: Date
  userID: User['userID']
  username: User['username']
}

export interface Talk {
  talkID: DocumentID
  approachedUserID: User['userID']
  approvedUserID: User['userID']
  blockedBy: User['userID'] | null
  createdAt: Date
  isBlocked: boolean
  updatedAt: Date
}

export interface Chat {
  userID: User['userID']
  createdAt: Date
  message: string
  profileImageURL: User['profileImageURL']
  username: User['username']
}

export const me: User = {
  userID: 'user1',
  age: 21,
  location: '池袋',
  profileImageURL: '/images/splash.png',
  selfIntroduction:
    'コスプレをしています！\n普段は歌舞伎でサキュバスの格好をしながらシーシャを提供しています',
  username: 'りあ'
}
