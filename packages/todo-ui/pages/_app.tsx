import { h } from 'preact'
import { setup } from 'goober'
import { prefix } from 'goober-autoprefixer'

setup(h, prefix)

export default ({ Component, pageProps }) => <Component {...pageProps} />

