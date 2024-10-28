import {View} from 'react-native'
import styled from 'styled-components/native'

export const RowView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ColumnView = styled(View)`
  display: flex;
  flex-direction: column;
`

export const GapView = styled(View)<{gapSize?: number}>`
  gap: ${({gapSize}) => gapSize || 10}px;
`

export const MarginView = styled(View)<{margin?: string}>`
  margin: ${({margin}) => margin || '0'};
`
