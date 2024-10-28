import {theme} from '@/styles/theme'
import {StyleSheet} from 'react-native'

export const GlobalStyle = StyleSheet.create({
  root: {
    flex: 1,
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.color.white,
    color: theme.color.black,
  },
})
