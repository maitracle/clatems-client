import React from 'react';
import styled from '@emotion/styled';
import { Link, LinkProps } from 'react-router-dom';


const StyledLink = ({ children, ...rest }: LinkProps) => {
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  text-decoration: none;
  color: unset;
`;

export default StyledLink;
