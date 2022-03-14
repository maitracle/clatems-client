import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';


type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
}

const Span4 = ({ children, fontWeight = FontWeights.regular, fontColor = GrayColors.gray900 }: Props) => {

  return (<Span4Style fontWeight={fontWeight} fontColor={fontColor}>
    {children}
  </Span4Style>);
};

const Span4Style = styled.span<{ fontWeight: FontWeights, fontColor: ThemeColors | GrayColors }>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: ${(props) => props.fontColor};
`;

export default Span4;
