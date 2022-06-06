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

export const myChat: Chat = {
  userID: me['userID'],
  createdAt: new Date(2022, 5, 1, 22, 14, 0),
  message:
    'おはよー！おはあり〜\nぺこぺこー！エコーエコー\nぽきたw魔剤ンゴ？！ありえん良さみが深いw次郎からのセイクで優勝せえへん？そり！そりすぎてソリになった！や、漏れのモタクとかしたことのNASAwそりでは無限に練りをしまつ。ぽやしみ〜',
  username: me['username']
}
