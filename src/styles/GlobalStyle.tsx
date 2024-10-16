import {theme} from '@/styles/theme'
import {FC} from 'react'
import {StyleSheet, Text, TextProps} from 'react-native'

export const DefaultText: FC<TextProps> = ({style, ...rest}) => {
  const defaultStyle = {
    fontFamily: 'Pretendard',
    color: theme.color.black,
  }

  return <Text style={[defaultStyle, style]} {...rest} />
}

export const GlobalStyle = StyleSheet.create({
  root: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.color.white,
    color: theme.color.black,
  },
})
