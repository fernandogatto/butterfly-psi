import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: '#FAFAFA',
    gray: {
      '50': '#F2F5F8',
      '100': '#E9ECEF',
      '200': '#DEE2E6',
      '300': '#CED4DA',
      '400': '#ADB5BD',
      '500': '#6C757D',
      '600': '#495057',
      '700': '#343A40',
      '800:': '#212529',
    },
    blue: {
      '100': '#E1ECF7',
      '200': '#AECBEB',
      '300': '#83B0E1',
      '400': '#71A5DE',
      '500': '#3a6ea5',
      '700': '#004e98',
    },
    orange: {
      '500': '#ff6700',
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    }
  },
})
