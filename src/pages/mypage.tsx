import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSetting, AiOutlineCamera } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'

import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

import { HomeLayout } from '@/components/Layouts/HomeLayout'
import { me, User } from '@/entities'

const MyPage: NextPage = () => {
  const user: User = me

  return (
    <HomeLayout>
      <div className="flex flex-col gap-8 items-center">
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
          <Link href="edit">
            <button className="btn btn-circle">
              <BsPencil size={24} />
            </button>
          </Link>
        </div>
      </div>
    </HomeLayout>
  )
}

export default MyPage
