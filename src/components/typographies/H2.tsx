import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';


type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
}

const H2 = ({ children, fontWeight = FontWeights.regular, fontColor = GrayColors.gray900 }: Props) => {

  return (<H2Style fontWeight={fontWeight} fontColor={fontColor}>
    {children}
  </H2Style>);
};

const H2Style = styled.h2<{ fontWeight: FontWeights, fontColor: ThemeColors | GrayColors }>`
  overflow: hidden;
  height: 28px;
  font-weight: ${(props) => props.fontWeight};
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${(props) => props.fontColor};
`;

export default H2;
