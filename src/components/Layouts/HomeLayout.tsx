import React, { ReactNode } from 'react'

import { HomeFooter } from '../HomeFooter'
import { UserHeader } from '../UserHeader'

type Props = {
  children?: ReactNode
}

export const HomeLayout = ({ children }: Props): React.ReactElement => (
  <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex fixed top-0 z-30 justify-center w-screen border-t border-stone-600 border-solid">
      <UserHeader />
    </div>
    <div className="flex w-[520px]">
      <main className="container mx-auto h-100">{children}</main>
    </div>
    <div className="flex fixed bottom-0 z-30 justify-center w-screen border-t border-stone-600 border-solid">
      <HomeFooter />
    </div>
  </div>
)
