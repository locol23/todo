import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import firebase from '../../src/firebase/client'

type Inputs = {
  email: string
  password: string
}

const LogIn = () => {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm<Inputs>()
  const onSubmit = ({ email, password }: Inputs) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        alert('Email or Password is wrong / メールアドレスまたはパスワードが違います（' + error.message + '）')
      })
  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            name="email"
            ref={register({
              required: 'Required / 必須項目です',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address / メールアドレスが正しくありません',
              },
            })}
          />
        </div>
        <div>{errors.email && errors.email.message}</div>

        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            name="password"
            type="password"
            ref={register({
              required: 'Required / 必須項目です',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters / パスワードは8文字以上必要です',
              },
            })}
          />
        </div>
        <div>{errors.password && errors.password.message}</div>

        <button type="submit">Sign In</button>
      </form>
    </>
  )
}

export default LogIn

