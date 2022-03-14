import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';


type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
}

const H3 = ({ children, fontWeight = FontWeights.regular, fontColor = GrayColors.gray900 }: Props) => {

  return (<H3Style fontWeight={fontWeight} fontColor={fontColor}>
    {children}
  </H3Style>);
};

const H3Style = styled.h3<{ fontWeight: FontWeights, fontColor: ThemeColors | GrayColors }>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: ${(props) => props.fontColor};
`;

export default H3;
