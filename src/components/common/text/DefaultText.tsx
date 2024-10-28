import {theme} from '@/styles/theme'
import {FC} from 'react'
import {Text, TextProps} from 'react-native'
import styled from 'styled-components/native'

interface DefaultTextProps extends TextProps {
  fontWeight?: number
  color?: string
  fontSize?: number
  letterSpacing?: number
}

const DefaultText: FC<DefaultTextProps> = ({
  style,
  fontSize,
  fontWeight,
  color,
  letterSpacing,
  ...rest
}) => {
  return (
    <StyledText
      style={style}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      letterSpacing={letterSpacing}
      {...rest}
    />
  )
}

export default DefaultText

const StyledText = styled(Text)<DefaultTextProps>`
  font-family: ${({fontWeight}) => {
    switch (fontWeight) {
      case theme.fontWeight.light:
        return 'Pretendard-Light'
      case theme.fontWeight.regular:
        return 'Pretendard-Regular'
      case theme.fontWeight.semiBold:
        return 'Pretendard-SemiBold'
      case theme.fontWeight.bold:
        return 'Pretendard-Bold'
      case theme.fontWeight.extraBold:
        return 'Pretendard-ExtraBold'
      default:
        return 'Pretendard-Medium'
    }
  }};

  color: ${({color}) => color || theme.color.black};
  font-size: ${({fontSize}) => fontSize || 16}px;
  letter-spacing: ${({letterSpacing}) => letterSpacing || -0.03}px;
  white-space: pre-wrap;
`
