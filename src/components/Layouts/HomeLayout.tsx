import React, { ReactNode } from 'react'

import { HomeFooter } from '../HomeFooter'
import { UserHeader } from '../UserHeader'

type Props = {
  children?: ReactNode
}

export const HomeLayout = ({ children }: Props): React.ReactElement => (
  <div className="h-screen">
    <UserHeader />
    <main className="container mx-auto h-100">{children}</main>
    <HomeFooter />
  </div>
)
