import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';


type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
}

const H1 = ({ children, fontWeight = FontWeights.bold, fontColor = GrayColors.gray900 }: Props) => {

  return (<H1Style fontWeight={fontWeight} fontColor={fontColor}>
    {children}
  </H1Style>);
};

const H1Style = styled.h1<{ fontWeight: FontWeights, fontColor: ThemeColors | GrayColors }>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${(props) => props.fontColor};
`;

export default H1;
