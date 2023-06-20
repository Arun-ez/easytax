import '@/styles/globals.css'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from '@/components/Navbar'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title> EasyTax </title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App;