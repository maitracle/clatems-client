import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

import CheckboxOn from 'assets/images/Checkbox/On.svg';
import CheckboxOff from 'assets/images/Checkbox/Off.svg';


type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

const Checkbox = ({ ...rest }: Props) => {
  return <CheckboxWithStyle type='checkbox' {...rest} />;
};

const CheckboxBase = styled.input`
  /* Chrome, Safari */
  -webkit-appearance: none;
  /* Firefox */
  -moz-appearance: none;
  cursor: pointer;
`;

const CheckboxWithStyle = styled(CheckboxBase)`
  width: 22px;
  height: 22px;
  outline: none;
  border: none;
  background-image: url(${CheckboxOff});
  background-size: cover;

  :checked {
    background-image: url(${CheckboxOn});
    color: white;
  }
`;

export default Checkbox;
