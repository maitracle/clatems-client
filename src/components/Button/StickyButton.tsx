import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import Button, { ButtonColors } from 'components/Button';
import { GrayColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';
import { Device } from 'styles/viewport';
import { css } from '@emotion/react';


type Props = {
  category?: ButtonColors;
  caption?: {
    label: string,
    onClick: () => void,
  },
} & ButtonHTMLAttributes<HTMLButtonElement>;


const StickyButton = ({ category, caption, children, ...rest }: Props) => {
  return <>
    <PlaceHolder hasCaption={!!caption}/>
    <Wrapper hasCaption={!!caption}>
      {
        caption && <Caption onClick={caption.onClick}>
          <Label>{caption.label}</Label>
        </Caption>
      }
      <Button category={ButtonColors.PRIMARY} {...rest}>
        {children}
      </Button>
    </Wrapper>
  </>;
};


const PlaceHolder = styled.div<{ hasCaption: boolean }>`
  height: 96px;
  ${({ hasCaption }) => hasCaption ?
          css`height: 106px;` :
          css`height: 96px;`
  }
`;

const Wrapper = styled.div<{ hasCaption: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  z-index: 1000;

  width: 100%;
  height: 96px;
  padding: 0 20px 24px 20px;
  ${({ hasCaption }) => hasCaption ?
  css`background-color: transparent;` :
  css`background-color: white;`
  }

  ${({ hasCaption }) => hasCaption ?
          css`height: 106px;` :
          css`height: 96px;`
  }
  
  ${({ hasCaption }) => !hasCaption && css`
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  `} @media screen and ${Device.desktop} {
    max-width: 420px;
    margin: 0 auto;
  }
`;

const Caption = styled.div`
  width: 100%;
  margin-bottom: 8px;

  font-weight: ${FontWeights.medium};
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-decoration-line: underline;
  color: ${GrayColors.gray500};
`;

const Label = styled.span`
  cursor: pointer;
`;

export default StickyButton;
