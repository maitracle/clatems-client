import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { GrayColors, ThemeColors } from 'styles/colors'
import { FontWeights } from 'styles/fonts'
import WarningIcon from 'assets/images/Form/Warning.svg'
import { css } from '@emotion/react'


export enum IconType {
  Warning = 'error'
}

type Props = {
  children: ReactNode;
  fontWeight?: FontWeights;
  fontColor?: ThemeColors | GrayColors;
  type?: IconType;
  underline?: boolean;
}

const Caption1 = ({
                    children,
                    fontWeight = FontWeights.regular,
                    fontColor = GrayColors.gray900,
                    type,
                    underline = false,
                  }: Props) => {
  return (<IconWrapper type={type}>
    <Caption1Style type={type} fontWeight={fontWeight} fontColor={fontColor} underline={underline}>
      {children}
    </Caption1Style>
  </IconWrapper>)
}

const Caption1Style = styled.span<{ fontWeight: FontWeights, type: IconType | undefined, fontColor: ThemeColors | GrayColors, underline: boolean }>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.01em;
  color: ${(props) => props.type ? ThemeColors.Warning : props.fontColor};
  ${(props) => props.underline ? 'text-decoration: underline' : ''};
`

const IconWrapper = styled.div<{ type: IconType | undefined }>`
  ${(props) => props.type &&
          css`
            display: inline-flex;
            height: 14px;
            margin-top: 4px;
            color: red;

            &::before {
              width: 14px;
              height: 14px;
              margin-right: 4px;
              content: '';
              background-image: url("${WarningIcon}");
              background-position: center;
          `}
`

export default Caption1
