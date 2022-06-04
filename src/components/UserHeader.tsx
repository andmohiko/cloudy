import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { me } from '@/entities'
export const UserHeader = (): React.ReactElement => {
  const user = me

  return (
    <div className="justify-between px-4 w-[520px] navbar bg-base-200">
      <Link href="mypage">
        <div className="w-10 h-10 cursor-pointer avatar">
          <Image
            src={user.profileImageURL}
            alt={user.username}
            layout="fill"
            className="rounded-full"
          />
        </div>
      </Link>

      <div>
        <span className="text-xl font-bold">cloudy</span>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </label>
          <div
            tabIndex={0}
            className="mt-3 w-52 shadow card card-compact dropdown-content bg-base-100"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
