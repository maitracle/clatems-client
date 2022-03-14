import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import Span3 from 'components/typographies/Span3';


type Props = {
  labelText: string;
  children: ReactNode;
}

const WithLabel = ({ labelText, children }: Props) => {
  return (
    <Wrapper>
      <LabelWrapper>
        <Span3>
          {labelText}
        </Span3>
      </LabelWrapper>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ChildrenWrapper = styled.div`
  margin-top: 4px;
`;


export default WithLabel;
