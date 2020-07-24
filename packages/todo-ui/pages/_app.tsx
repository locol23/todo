import React from 'react'
import { setup } from 'goober'
import { prefix } from 'goober-autoprefixer'
import { AppPropsType } from 'next/dist/next-server/lib/utils'

setup(React.createElement, prefix)

const App = ({ Component, pageProps }: AppPropsType) => <Component {...pageProps} />

export default App

