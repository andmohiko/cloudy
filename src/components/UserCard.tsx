import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { User } from '@/entities'

interface Props {
  user: User
}

export const UserCard = ({ user }: Props): React.ReactElement => {
  return (
    <Link href={`/user/${user.userID}`}>
      <div className="w-96 shadow-xl cursor-pointer card bg-base-200">
        <div className="w-full h-96 avatar">
          <div className="w-full">
            <Image
              src={user.profileImageURL}
              alt={user.username}
              layout="fill"
            />
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-title">{user.username}</h3>
          <p className="whitespace-pre-wrap">{user.selfIntroduction}</p>
          <div className="justify-around mt-8 card-actions">
            <button className="btn btn-lg btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button className="btn btn-lg btn-circle btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
