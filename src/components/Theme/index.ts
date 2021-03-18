import { createTheme, createText } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#100A39',
    secondary: '#FF628D',
    white: '#FFFFFF',
    dark: '#100A39',
    grey: '#473D8E66',
    light: '#F3F3F8',
    red: '#FF628D',
    yellow: '##FCAA15',
    black: '##000000',
    subText: 'rgba(16, 10, 57, 0.5)',
  },
  spacing: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
  },
  borderRadii: {
    none: 0,
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
  },
  textVariants: {
    h1: {
      fontSize: 32,
      fontFamily: 'ProductSans-Bold',
      letterSpacing: 0.5,
    },
    h2: {
      fontSize: 24,
      fontFamily: 'ProductSans-Bold',
      letterSpacing: 1.5,
    },
    h3: {
      fontSize: 20,
      fontFamily: 'ProductSans-Bold',
      letterSpacing: 0.5,
    },
    h4: {
      fontSize: 16,
      fontFamily: 'ProductSans-Bold',
      letterSpacing: 0.5,
    },
    h5: {
      fontSize: 14,
      fontFamily: 'ProductSans-Bold',
      letterSpacing: 0.5,
    },
    h6: {
      fontSize: 10,
      fontFamily: 'ProductSans-Bold',
      letterSpacing: 0.5,
    },
    b1: {
      fontSize: 16,

      fontFamily: 'ProductSans-Regular',
      letterSpacing: 0.5,
    },
    b2: {
      fontSize: 14,

      fontFamily: 'ProductSans-Regular',
      letterSpacing: 0.5,
    },
    b2B: {
      fontSize: 14,

      fontFamily: 'ProductSans-Bold',
      letterSpacing: 0.5,
    },
    b3: {
      fontSize: 12,

      fontFamily: 'ProductSans-Regular',
      letterSpacing: 0.5,
    },
    b3B: {
      fontSize: 12,

      fontFamily: 'ProductSans-Bold',
      letterSpacing: 0.5,
    },
    b4: {
      fontSize: 10,

      fontFamily: 'ProductSans-Regular',
      letterSpacing: 0.5,
    },
    button: {
      fontSize: 14,
      fontFamily: 'ProductSans-Bold',
      letterSpacing: 0.5,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
