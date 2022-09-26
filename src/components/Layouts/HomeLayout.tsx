import React, { ReactNode } from 'react'

import { HomeFooter } from '../HomeFooter'
import { HomeHeader } from '../HomeHeader'

type Props = {
  children?: ReactNode
}

export const HomeLayout = ({ children }: Props): React.ReactElement => (
  <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex fixed top-0 z-30 justify-center w-screen border-t border-stone-600 border-solid">
      <HomeHeader />
    </div>
    <main className="flex overflow-scroll flex-col py-4 my-16 w-[520px] h-full">
      {children}
    </main>
    <div className="flex fixed bottom-0 z-30 justify-center w-screen border-t border-stone-600 border-solid">
      <HomeFooter />
    </div>
  </div>
)
