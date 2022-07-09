import { ChakraProvider } from '@chakra-ui/react/'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'

const website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts></Fonts>
      <Layout router={router}>
        <Component {...pageProps} key={router.route}></Component>
      </Layout>
    </ChakraProvider>
  )
}

export default website
