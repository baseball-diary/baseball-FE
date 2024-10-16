import {theme} from '@/styles/theme'
import {FC} from 'react'
import {Text, TextProps} from 'react-native'

export const DefaultText: FC<TextProps> = ({style, ...rest}) => {
  const defaultStyle = {
    fontFamily: 'Pretendard',
    color: theme.color.black,
  }

  return <Text style={[defaultStyle, style]} {...rest} />
}
