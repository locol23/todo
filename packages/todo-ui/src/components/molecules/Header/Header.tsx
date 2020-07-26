import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import firebase from '../../../firebase/client'

type Props = {
  isLogin: boolean
}

export const Header: React.FC<Props> = ({ isLogin }) => {
  const logout = () => firebase.auth().signOut()

  return (
    <Container>
      <Inner>
        <Logo>Todone</Logo>
        <LinkContainer>
          {isLogin ? (
            <LinkWrap>
              <LinkText onClick={logout}>Log out</LinkText>
            </LinkWrap>
          ) : (
            <>
              <LinkWrap>
                <Link href="/signup">
                  <LinkText>Sign up</LinkText>
                </Link>
              </LinkWrap>
              <LinkWrap>
                <Link href="/login">
                  <LinkText>Log in</LinkText>
                </Link>
              </LinkWrap>
            </>
          )}
        </LinkContainer>
      </Inner>
    </Container>
  )
}

const Container = styled.header({
  display: 'flex',
  justifyContent: 'center',
  boxShadow: '0 2px 7px rgba(0, 0, 0, 0.12)',
  padding: '0 0.5rem',
})

const Inner = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1000px',
})

const Logo = styled.div({
  color: '#00aaee',
  fontFamily: '"Roboto Slab", serif',
  fontSize: '2rem',
  userSelect: 'none',
})

const LinkContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const LinkWrap = styled.div({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '0 0.4rem',
  borderBottom: '2px solid transparent',
  ':hover': {
    backgroundColor: '#fafafa',
    borderBottom: '2px solid #00aaee',
  },
})

const LinkText = styled.a({
  fontSize: '1.4rem',
  textDecoration: 'none',
})

