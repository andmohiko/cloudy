import React from 'react'

import { BiImageAdd } from 'react-icons/bi'

export const MotivationInput = (): React.ReactElement => {
  return (
    <div className="gap-8 items-center w-full form-control">
      <div className="w-full max-w-xs form-control">
        <label className="label">
          <span className="label-text">目的</span>
        </label>
        <select className="select select-bordered">
          <option disabled selected>
            どれか選んでね
          </option>
          <option>友達がほしい</option>
          <option>話し相手を探している</option>
          <option>とりあえずシーシャ吸いたい</option>
        </select>
      </div>

      <div className="w-full max-w-xs form-control">
        <label className="label">
          <span className="label-text">性別</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value="25"
          className="range"
          step="25"
        />
        <div className="flex justify-between px-2 mt-2 w-full text-xs">
          <span>女性</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>その他</span>
        </div>
      </div>
    </div>
  )
}
