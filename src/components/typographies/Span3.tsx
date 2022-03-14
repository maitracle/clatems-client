import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';


type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
}

const Span3 = ({ children, fontWeight = FontWeights.regular, fontColor = GrayColors.gray900 }: Props) => {

  return (<Span3Style fontWeight={fontWeight} fontColor={fontColor}>
    {children}
  </Span3Style>);
};

const Span3Style = styled.span<{ fontWeight: FontWeights, fontColor: ThemeColors | GrayColors }>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: ${(props) => props.fontColor};
`;

export default Span3;
