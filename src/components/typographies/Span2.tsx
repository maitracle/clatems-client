import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';


type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
}

const Span2 = ({ children, fontWeight = FontWeights.regular, fontColor = GrayColors.gray900 }: Props) => {

  return (<Span2Style fontWeight={fontWeight} fontColor={fontColor}>
    {children}
  </Span2Style>);
};

const Span2Style = styled.span<{ fontWeight: FontWeights, fontColor: ThemeColors | GrayColors }>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: ${(props) => props.fontColor};
`;

export default Span2;
