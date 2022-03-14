import React from 'react';
import styled from '@emotion/styled';
import StyledLink from 'components/StyledLink';


const Logo = () => {
  return (
    <LogoLink to={'/'}>
      Clatems
    </LogoLink>

  );
};

const LogoLink = styled(StyledLink)`
  height: 24px;
`;


export default Logo;
