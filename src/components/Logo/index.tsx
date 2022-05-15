import React from 'react';
import styled from '@emotion/styled';
import StyledLink from 'components/StyledLink';


const Logo = () => {
  return (
    <LogoLink to={'/'}>
      <LogoTypo>
        Clatems
      </LogoTypo>
    </LogoLink>

  );
};

const LogoLink = styled(StyledLink)`
`;

const LogoTypo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #7950f2;
`


export default Logo;
