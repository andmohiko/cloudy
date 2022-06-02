import React from 'react'

export const SelfIntroductionInput = (): React.ReactElement => {
  return (
    <div className="gap-8 items-center w-full form-control">
      <div className="form-control">
        <label className="label">
          <span className="label-text">自己紹介</span>
        </label>
        <textarea
          className="w-72 h-24 textarea textarea-bordered"
          placeholder="趣味はプロセカです"
        />
      </div>
    </div>
  )
}
