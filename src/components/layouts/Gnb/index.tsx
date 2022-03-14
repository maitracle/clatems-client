import H1 from 'components/typographies/H1';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import PrevActionIcon from 'assets/images/Gnb/PrevActionIcon.svg';
import DeleteIcon from 'assets/images/Gnb/DeleteIcon.svg';
import { useHistory } from 'react-router-dom';
import Logo from 'components/Logo';
import { FontWeights } from 'styles/fonts';


type TitleProps = {
  isLogo?: boolean;
  text: string;
};

export type GnbProps = {
  title?: TitleProps;
  hasPrev?: boolean;
  isMainPage: boolean;
  prevAction?: () => void;
  rightIcon?: RightIcons;
  rightIconAction?: () => void;
}

export enum RightIcons {
  ALARM = 'ALARM',
  TRASH_CAN = 'TRASH_CAN'
}

const Gnb = ({ hasPrev, title, isMainPage, rightIcon, prevAction, rightIconAction }: GnbProps) => {
  const history = useHistory();

  const prevActionOrHistoryBack = () => {
    if (prevAction) {
      prevAction();
    } else {
      history.goBack();
    }
  };

  const titleComponent = useMemo(() => {
    if (title) {
      if (title.isLogo) {
        return <Logo />;
      } else {
        if (isMainPage) {
          return <H1>{title.text}</H1>;
        } else {
          return <SubPageTitle>{title.text}</SubPageTitle>;
        }
      }
    } else {
      return null;
    }
  }, [isMainPage, title]);

  return (
    <Wrapper>
      {hasPrev && <LeftIconImage src={PrevActionIcon} onClick={prevActionOrHistoryBack} />}
      {titleComponent}
      <RightIcon onClick={rightIconAction}>
        {rightIcon === RightIcons.TRASH_CAN && <RightIconImage src={DeleteIcon} />}
      </RightIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 56px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftIconImage = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const SubPageTitle = styled.h2`
  font-weight: ${FontWeights.bold};
  font-size: 18px;
  line-height: 28px;
  color: #000000;
`;

const RightIcon = styled.div`
  min-width: 28px;
  height: 28px;
`;

const RightIconImage = styled.img`
  width: 28px;
  height: 28px;
`;

export default Gnb;
