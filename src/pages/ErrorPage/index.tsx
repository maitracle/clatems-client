import React from 'react';
import PageWrapper from 'components/layouts/PageWrapper';
import styled from '@emotion/styled';
import Span2 from 'components/typographies/Span2';
import ErrorNotFoundImage from 'assets/images/ErrorPage/ErrorNotFound.svg';
import { GrayColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';
import StyledLink from 'components/StyledLink';


const NotFoundErrorPage = () => {

  return (

    <PageWrapper>
      <ContentsWrapper>
        <Title>
          찾을 수 없는 페이지 입니다
        </Title>

        <DescriptionWrapper>
          <Span2 fontColor={GrayColors.gray500}>
            요청하신 페이지가 더 이상 존재하지 않거나 <br />
            잘못된 경로로 접속하셨어요
          </Span2>
        </DescriptionWrapper>
        <ImageWrapper>
          <Image src={ErrorNotFoundImage} />
        </ImageWrapper>
        <StyledLink to='/'>
          <HomeLinkWrapper>
            홈으로 가기
          </HomeLinkWrapper>
        </StyledLink>
      </ContentsWrapper>
    </PageWrapper>
  );
};


const ContentsWrapper = styled.div`
  flex-grow: 1;
  padding: 78px 20px 0 20px;

  text-align: center;
`;

const Title = styled.div`
  max-width: 230px;
  margin: 0 auto;
  font-weight: ${FontWeights.semiBold};
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
`;

const DescriptionWrapper = styled.div`
  margin-top: 12px;
`;

const ImageWrapper = styled.div`
  padding: 0 11%;
`;

const Image = styled.img`
  width: 100%;
  max-width: 280px;
  margin-top: 34px;
`;

const HomeLinkWrapper = styled.div`
  color: ${GrayColors.gray500};
  font-weight: ${FontWeights.medium};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  margin: 32px 0 222px 0;
  text-decoration: underline;
`;

export default NotFoundErrorPage;
