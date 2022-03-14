import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';


type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
}

const Span1 = ({ children, fontWeight = FontWeights.regular, fontColor = GrayColors.gray900 }: Props) => {

  return (<Span1Style fontWeight={fontWeight} fontColor={fontColor}>
    {children}
  </Span1Style>);
};

const Span1Style = styled.span<{ fontWeight: FontWeights, fontColor: ThemeColors | GrayColors }>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${(props) => props.fontColor};
`;

export default Span1;
