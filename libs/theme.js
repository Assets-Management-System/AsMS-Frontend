import {mode} from "@chakra-ui/theme-tools"

const styles = {
  global: props => ({
    body: { bg: mode('#f0e7db', '#202023')(props) }
  })
}

const fonts = {
  heading: 'Montserrat'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = {
  styles,
  fonts,
  config
}

export default theme
