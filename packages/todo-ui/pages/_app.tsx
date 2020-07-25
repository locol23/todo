import React from 'react'
import { setup } from 'goober'
import { prefix } from 'goober-autoprefixer'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'

setup(React.createElement, prefix)

const App = ({ Component, pageProps }: AppPropsType) => (
  <>
    <Head>
      <title>todone</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
