export const theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    gray100: '#F0F0F0', // user background
    gray500: '#8B8B8B', // text
    gray700: '#2C2C2C', // button
    skyblue: '#0291D3',
  },
  fontWeight: {
    light: 300,
    medium: 400,
    regular: 500, // default
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
} as const

export type Theme = typeof theme
