import React, { ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Device } from 'styles/viewport';
import { GrayColors, ThemeColors } from 'styles/colors';

import Gnb, { GnbProps } from 'components/layouts/Gnb';
import Footer from 'components/layouts/Footer';
import BottomNavigation from 'components/layouts/BottomNavigation';
import { FontWeights } from 'styles/fonts';
import CloseIcon from 'assets/images/Gnb/CloseIcon.svg';
import StyledLink from 'components/StyledLink';


type Props = {
  children: ReactNode;
  gnbProps?: GnbProps;
  extraComponents?: {
    hasSignUpBanner?: boolean;
    hasFooter?: boolean;
    hasBottomNavigation?: boolean;
  }
}

const PageWrapper = ({ children, gnbProps, extraComponents }: Props) => {
  const [isOpenSignUpBanner, setIsOpenSignUpBanner] = useState(true);
  const [leftTime, setLeftTime] = useState('24:00:00');

  const handleSetLeftTime = () => {
    const now = new Date();
    const target = new Date();
    target.setHours(23, 59, 59, 999);

    const diff = target.getTime() - now.getTime();
    const leftHour = Math.floor(diff / (1000 * 60 * 60));
    const leftMinute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const leftSecond = Math.floor((diff % (1000 * 60)) / 1000);

    setLeftTime(`${leftHour.toString().padStart(2, '0')}:${leftMinute.toString().padStart(2, '0')}:${leftSecond.toString().padStart(2, '0')}`);
  };

  useEffect(() => {
    if (extraComponents?.hasSignUpBanner && isOpenSignUpBanner) {
      handleSetLeftTime();

      const timer = setInterval(() => {
        handleSetLeftTime();
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [extraComponents?.hasSignUpBanner, isOpenSignUpBanner]);

  const handleBannerClose = () => {
    setIsOpenSignUpBanner(false);
  };

  return (
    <Wrapper>
      <ChildrenWrapper>
        {extraComponents?.hasSignUpBanner && isOpenSignUpBanner && <SignUpBannerWrapper>
          <BannerContentsWrapper to='/sign'>
            <ContentsDivide>
              출시 이벤트 진행중
            </ContentsDivide>
            <ContentsDivide>
              <Del>월 1,900원</Del>
              <Arrow>
                ➔
              </Arrow>
              <Yellow>
                평생 무료 [{leftTime}]
              </Yellow>
            </ContentsDivide>
          </BannerContentsWrapper>
          <CloseBannerButton onClick={handleBannerClose} src={CloseIcon} />
        </SignUpBannerWrapper>}
        {!!gnbProps && <Gnb {...gnbProps} />}
        {children}
        {extraComponents?.hasFooter && <Footer />}
        {extraComponents?.hasBottomNavigation && <BottomNavigation />}
      </ChildrenWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${GrayColors.gray200};
  min-height: 100vh;
`;

const ChildrenWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and ${Device.desktop} {
    max-width: 420px;
    margin: 0 auto;
  }
`;

const SignUpBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${ThemeColors.Theme};
  width: 100%;
  padding: 18px 20px;

  font-size: 14px;
  line-height: 30px;
  letter-spacing: -0.01em;
  color: ${GrayColors.gray25};
`;

const BannerContentsWrapper = styled(StyledLink)`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width : 382px) {
    flex-direction: column;
  }
`;

const ContentsDivide = styled.span`
  line-height: 16px;
  margin-right: 4px;
  
  @media screen and (max-width : 382px) {
    width: 100%;
  }
`;

const Del = styled.del`
`;

const Arrow = styled.span`
  margin: 0 6px;
`;

const Yellow = styled.span`
  color: #ffe369;
  font-weight: ${FontWeights.bold};
`;

const CloseBannerButton = styled.img`
  width: 16px;
  height: 16px;
`;


export default PageWrapper;
