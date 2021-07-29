import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    background: '#343A40',
    sidebar: '#3A444E',
    card_primary: '#37404A',
    card_secondary: '#444e5a',
    text_primary: '#FFFFFF',
    text_secondary: '#8391A2',
    text_focus: '#AAB8C5',
    text_link: '#CED4DA',
    blue: '#2c8ef8',
    indigo: '#727cf5',
    purple: '#6b5eae',
    pink: '#ff679b',
    red: '#fa5c7c',
    orange: '#fd7e14',
    yellow: '#ffbc00',
    green: '#0acf97',
    teal: '#02a8b5',
    cyan: '#39afd1',
    white: '#fff',
    gray: '#8391a2',
    gray_dark: '#e3eaef',
    success: '#0acf97',
    info: '#39afd1',
    warning: '#ffbc00',
    danger: '#fa5c7c',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp