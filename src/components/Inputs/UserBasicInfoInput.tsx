import React from 'react'

import { BiImageAdd } from 'react-icons/bi'

export const UserBasicInfoInput = (): React.ReactElement => {
  return (
    <div className="gap-8 items-center w-full form-control">
      <div className="avatar placeholder">
        <div className="w-36 rounded-full bg-neutral-focus text-neutral-content">
          <BiImageAdd size={48} />
        </div>
      </div>

      <div>
        <label className="label">
          <span className="label-text">ユーザー名</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="w-72 input input-bordered"
        />
      </div>
    </div>
  )
}
