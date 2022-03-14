import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { GrayColors, ThemeColors } from 'styles/colors';
import Caption1 from 'components/typographies/Caption1';
import { FontWeights } from 'styles/fonts';
import StyledLink from 'components/StyledLink';
import { useLocation } from 'react-router';
import Home from 'assets/images/ButtomNavigation/Home.svg';
import HomeSelected from 'assets/images/ButtomNavigation/HomeSelected.svg';
import CreateBond from 'assets/images/ButtomNavigation/CreateBond.svg';
import CreateBondSelected from 'assets/images/ButtomNavigation/CreateBondSelected.svg';
import Profile from 'assets/images/ButtomNavigation/Profile.svg';
import ProfileSelected from 'assets/images/ButtomNavigation/ProfileSelected.svg';
import { Device } from 'styles/viewport';


enum BottomNavigationItems {
  home = 'HOME',
  createBond = 'CREATE_BOND',
  myPage = 'MY_PAGE'
}


const BottomNavigation = () => {
  const location = useLocation();

  const currentTab = useMemo(() => {
    if (location.pathname === '/') {
      return BottomNavigationItems.home;
    } else if (location.pathname === '/bonds/create') {
      return BottomNavigationItems.createBond;
    } else if (location.pathname === '/my-page') {
      return BottomNavigationItems.myPage;
    }
  }, [location.pathname]);

  return (
    <>
      <PlaceHolder />
      <Wrapper>
        <ItemWrapper to='/'>
          <ItemImage src={currentTab === BottomNavigationItems.home ? HomeSelected : Home} />
          <Caption1
            fontColor={currentTab === BottomNavigationItems.home ? ThemeColors.Theme : GrayColors.gray900}
            fontWeight={FontWeights.medium}
          >
            홈
          </Caption1>
        </ItemWrapper>
        <ItemWrapper to='/bonds/create'>
          <ItemImage src={currentTab === BottomNavigationItems.createBond ? CreateBondSelected : CreateBond} />
          <Caption1
            fontColor={currentTab === BottomNavigationItems.createBond ? ThemeColors.Theme : GrayColors.gray900}
            fontWeight={FontWeights.medium}
          >
            기록하기
          </Caption1>
        </ItemWrapper>
        <ItemWrapper to='/my-page'>
          <ItemImage src={currentTab === BottomNavigationItems.myPage ? ProfileSelected : Profile} />
          <Caption1
            fontColor={currentTab === BottomNavigationItems.myPage ? ThemeColors.Theme : GrayColors.gray900}
            fontWeight={FontWeights.medium}
          >
            마이페이지
          </Caption1>
        </ItemWrapper>
      </Wrapper>
    </>
  );
};
const PlaceHolder = styled.div`
  height: 84px;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 84px;
  width: 100%;
  border-top: 1px solid ${GrayColors.gray100};
  display: flex;

  position: fixed;
  bottom: 0;
  background-color: white;
  z-index: 100;

  @media screen and ${Device.desktop} {
    max-width: 420px;
    margin: 0 auto;
  }
`;

const ItemWrapper = styled(StyledLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 28px;
  height: 28px;
  margin-bottom: 3px;
`;

export default BottomNavigation;
