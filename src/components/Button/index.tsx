import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';
import { css } from '@emotion/react';


type Props = {
  category?: ButtonColors;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export enum ButtonColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

const Button = ({ category, children, ...rest }: Props) => {
  return (
    <StyledButton category={category} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ category: ButtonColors | undefined }>`
  width: 100%;
  height: 52px;
  border-radius: 2px;
  border: none;

  font-weight: ${FontWeights.medium};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;

  not:disabled {
    cursor: pointer;
  }

  ${(props) => {
    switch (props.category) {
      case ButtonColors.PRIMARY:
        return css`
          color: #FFFFFF;
          background: ${ThemeColors.Theme};

          :disabled {
            color: ${GrayColors.gray400};
            background: ${GrayColors.gray300};
          }

          :not(:disabled) {
            :active, :hover {
              background: ${ThemeColors.ThemeSelected};
            }
          }
        `;
      case ButtonColors.SECONDARY:
        return css`
          color: #FFFFFF;
          background: ${GrayColors.gray800};

          :disabled {
            color: ${GrayColors.gray400};
            background: ${GrayColors.gray500};
          }

          :not(:disabled) {
            :active, :hover {
              background: ${GrayColors.gray900};
            }
          }
        `;
      case ButtonColors.TERTIARY:
        return css`
          color: ${GrayColors.gray800};
          background: ${GrayColors.gray100};

          :disabled {
            color: ${GrayColors.gray300};
            background: ${GrayColors.gray100};
          }

          :not(:disabled) {
            :active, :hover {
              background: ${GrayColors.gray200};
            }
          }
        `;
      default:
        return css`
          color: ${GrayColors.gray800};
          background: ${GrayColors.gray100};

          :disabled {
            color: ${GrayColors.gray300};
            background: ${GrayColors.gray100};
          }

          :not(:disabled) {
            :active, :hover {
              background: ${GrayColors.gray200};
            }
          }
        `;
    }
  }}
`;


export default Button;
