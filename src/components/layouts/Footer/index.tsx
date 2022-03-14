import React from 'react';
import styled from '@emotion/styled';
import { GrayColors } from 'styles/colors';
import Logo from 'components/Logo';


const Footer = () => {
  return (
    <Wrapper>
      <PolicyLinkWrapper>
        <StyledAnchor
          href='https://flower-microwave-8d3.notion.site/8c92ee275d4b48fe9926fc037825f7e0'
          target='_blank'
          rel='noreferrer'
        >
          이용약관
        </StyledAnchor>
        {' '}
        |
        {' '}
        <StyledAnchor
          href='https://flower-microwave-8d3.notion.site/fba2d8255e524fc2ab9741d04fabc6a5'
          target='_blank'
          rel='noreferrer'
        >
          개인정보처리방침
        </StyledAnchor>
        {' '}
        |
        {' '}
        <StyledAnchor
          href='https://flower-microwave-8d3.notion.site/953b0327537e4959ac5255f9ba6c0ff5'
          target='_blank'
          rel='noreferrer'
        >
          마케팅정보 수신 약관
        </StyledAnchor>
      </PolicyLinkWrapper>


      <BusinessInfo>
        (주)돈리멤버 | 대표 천경환 | 서울특별시 강남구 테헤란로 151 (역삼하이츠빌딩) 7F | cs@donremember.com | 전화: 070-4680-5906 | 사업자등록번호 :
        843-81-02573
      </BusinessInfo>

      <CopyRight>
        Copyright 2022. donremember Inc. All rights reserved.
      </CopyRight>

      <LogoWrapper>
        <Logo />
      </LogoWrapper>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 20px;
`;

const FooterItem = styled.div`
  margin-top: 10px;
`;

const PolicyLinkWrapper = styled(FooterItem)`
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${GrayColors.gray500};
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: unset;
`;

const BusinessInfo = styled(FooterItem)`
  font-size: 11px;
  line-height: 18px;
  color: ${GrayColors.gray400};
`;

const CopyRight = styled(FooterItem)`
  font-size: 11px;
  line-height: 18px;
  color: ${GrayColors.gray400};
`;

const LogoWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`


export default Footer;
