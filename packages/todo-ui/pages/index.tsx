import React from 'react'
import firebase from '../src/firebase/client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Header } from '../src/components/molecules/Header'
import styled from 'styled-components'

const Top = () => {
  const [user, loading, error] = useAuthState(firebase.auth())

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <>
      <Header isLogin={!!user} />
      <Container>
        <Inner>
        {user && (
          <div>
            <p>Current User: {user.email}</p>
          </div>
        )}
        </Inner>
      </Container>
    </>
  )
}

export default Top

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

const Inner = styled.div({
  width: '1000px',
  maxWidth: '1000px'
})
