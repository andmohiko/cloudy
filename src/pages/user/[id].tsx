import Image from 'next/image'
import { useRouter } from 'next/router'
import { GoLocation } from 'react-icons/go'

import type { NextPage } from 'next'

import { HomeLayout } from '@/components/Layouts/HomeLayout'
import { LikeAction } from '@/components/LikeAction'
import { me, User } from '@/entities'
import styles from '@/styles/Home.module.css'

const UserPage: NextPage = () => {
  const router = useRouter()
  const { id: userID } = router.query
  console.log({ userID })

  const user: User = me

  return (
    <HomeLayout>
      <div className="flex overflow-y-scroll flex-col justify-start items-start pb-60 w-full">
        <div className="relative w-full h-full border-2 border-blue-600 border-solid">
          <Image
            src={user.profileImageURL}
            alt={user.username}
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
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
      {/* <div className="fixed bottom-16 z-40 w-full">
        <LikeAction />
      </div> */}
    </HomeLayout>
  )
}

export default UserPage
