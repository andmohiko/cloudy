import { useState } from 'react'

import classNames from 'classnames'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

import { MotivationInput } from '@/components/Inputs/MotivationInput'
import { SelfIntroductionInput } from '@/components/Inputs/SelfIntroductionInput'
import { UserBasicInfoInput } from '@/components/Inputs/UserBasicInfoInput'
import { HomeLayout } from '@/components/Layouts/HomeLayout'

const RegisterPage: NextPage = () => {
  const router = useRouter()
  const [step, setStep] = useState<number>(0)
  const toNextStep = () => {
    if (step !== 2) {
      setStep(step + 1)
      return
    }
    register()
  }

  const toPreviousStep = () => setStep(step - 1)

  const register = () => {
    router.push('/')
  }

  return (
    <HomeLayout>
      <div className="flex flex-col gap-8 justify-between items-center py-8 h-full">
        <ul className="gap-4 steps">
          <li className={classNames('step', { 'step-primary': step === 0 })} />
          <li className={classNames('step', { 'step-primary': step === 1 })} />
          <li className={classNames('step', { 'step-primary': step === 2 })} />
        </ul>

        {step === 0 && <UserBasicInfoInput />}
        {step === 1 && <MotivationInput />}
        {step === 2 && <SelfIntroductionInput />}

        <div className="flex flex-col gap-2 w-48">
          <button className="btn btn-primary" onClick={toNextStep}>
            {step === 2 ? '登録' : '次へ'}
          </button>
          <button
            className={classNames('btn btn-ghost btn-secondary', {
              'btn-disabled': step === 0
            })}
            onClick={toPreviousStep}
          >
            戻る
          </button>
        </div>
      </div>
    </HomeLayout>
  )
}

export default RegisterPage
