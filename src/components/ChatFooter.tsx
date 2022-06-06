import React from 'react'

import { FiSend } from 'react-icons/fi'

export const ChatFooter = (): React.ReactElement => {
  return (
    <div className="flex gap-3 p-2 w-[520px] bg-base-100">
      <textarea rows={1} className="w-full textarea textarea-bordered" />
      <FiSend size={28} className="mt-2" />
    </div>
  )
}
