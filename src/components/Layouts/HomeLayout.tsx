import React, { ReactNode } from 'react'

import { HomeFooter } from '../HomeFooter'
import { UserHeader } from '../UserHeader'

type Props = {
  children?: ReactNode
}

export const HomeLayout: React.FC = ({ children }: Props) => (
  <div className="h-screen">
    <UserHeader />
    <main className="container mx-auto h-100">{children}</main>
    <HomeFooter />
  </div>
)
