import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '@/styles/theme'

import AppProvider from '@/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  )
}
