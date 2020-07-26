import React from 'react'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import 'sanitize.css'

const App = ({ Component, pageProps }: AppPropsType) => (
  <>
    <Head>
      <title>todone</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
