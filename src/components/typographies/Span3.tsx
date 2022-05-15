import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { GrayColors, ThemeColors } from 'styles/colors'
import { FontWeights } from 'styles/fonts'


type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
  underline?: boolean;
}

const Span3 = ({
                 children,
                 fontWeight = FontWeights.regular,
                 fontColor = GrayColors.gray900,
                 underline = false,
               }: Props) => {

  return (<Span3Style fontWeight={fontWeight} fontColor={fontColor} underline={underline}>
    {children}
  </Span3Style>)
}

const Span3Style = styled.span<{ fontWeight: FontWeights, fontColor: ThemeColors | GrayColors, underline: boolean }>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: ${(props) => props.fontColor};
  ${(props) => props.underline ? 'text-decoration: underline' : ''};
`

export default Span3
