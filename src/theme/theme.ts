import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'background',
      },
      input: {
        bg: 'background !important',
        color: 'title-text !important',
        border: 'none !important',
        borderRadius: '100em !important',
        _focus: {
          outline: 'none',
          border: '1px solid primary !important',
          boxShadow: '0px 0px 0px 1px rgba(194, 194, 194, 0.45)',
        },
        _hover: {
          backgroundColor: 'background',
        },
      },
    },
  },
  breakpoints: {
    xs: '300px',
    sm: '600px',
    md: '906px',
    lg: '1048px',
    xl: '1450px',
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    primary: '#2196F3',
    'primary-active': '#E3F2FD',
    'primary-hover': '#F0F8FD',
    'primary-border': '#64B5F6',
    secondary: '#FF6D00',
    'input-text': '#ADAFBB',
    'paragraph-text': '#86888F',
    background: '#F4F5FA',
    'neutral-hover': '#FCFCFE',
    border: '#E1E4E8',
    'title-text': '#212121',
    white: '#FFFFFF',
    error: '#F44336',
    'error-border': '#E57373',
    'error-background': '#FFEBEE',
    tag1: '#FFF3E0',
    tag2: '#B2DAFA',
    tag3: '#FCE4EC',
    tag4: '#E8F5E9',
  },
});
