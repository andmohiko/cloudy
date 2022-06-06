import React, { ReactNode, useState } from 'react'

import { ChatFooter } from '../ChatFooter'
import { ChatHeader } from '../ChatHeader'

type Props = {
  children?: ReactNode
}

export const ChatLayout = ({ children }: Props): React.ReactElement => {
  const [pageTitle, setPageTitle] = useState<string>('cloudy')

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex fixed top-0 z-30 justify-center w-screen">
        <ChatHeader pageTitle={pageTitle} />
      </div>
      <main className="flex overflow-scroll flex-col my-16 w-[520px] h-full">
        {children}
      </main>
      <div className="flex fixed bottom-0 z-30 justify-center w-screen border-t border-stone-600 border-solid">
        <ChatFooter />
      </div>
    </div>
  )
}
