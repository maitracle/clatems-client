import React from 'react'
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ThemeColors } from 'styles/colors';

type Props = {
  isOn: boolean
  handleToggle: () => void
}

class Toggle extends React.Component<Props> {
  state = {
    isNeedAnimation: false,
  }

  toggleWithAnimation() {
    this.props.handleToggle()
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
    if (this.props.isOn === !nextProps.isOn) {
      this.setState({
        isNeedAnimation: true,
      })
    }

    return true
  }

  render() {
    return (
      <Wrapper onClick={this.toggleWithAnimation.bind(this)} isOn={this.props.isOn}>
        <Icon isOn={this.props.isOn} isNeedAnimation={this.state.isNeedAnimation} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div<{ isOn: boolean }>`
  display: flex;
  align-items: center;
  width: 51px;
  height: 31px;
  border-radius: 16px;
  padding: 0 2px;
  cursor: pointer;
  ${({ isOn }) => (isOn ? `background-color: ${ThemeColors.Theme};` : 'background-color: rgba(120, 120, 128, 0.16);')}
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const toggleOn = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(20px);
  }
`

const toggleOff = keyframes`
  from {
    transform: translateX(20px);

  }
  to {
    transform: translateX(0);
  }
`

const Icon = styled.div<{ isOn: boolean; isNeedAnimation: boolean }>`
  width: 27px;
  height: 27px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06);

  ${({ isOn, isNeedAnimation }) => {
  if (isNeedAnimation) {
    return isOn
      ? css`
            transform: translateX(0);
            animation: ${toggleOn} 400ms 1ms cubic-bezier(0.4, 0, 0.3, 1) forwards;
          `
      : css`
            transform: translateX(20px);
            animation: ${toggleOff} 400ms 1ms cubic-bezier(0.4, 0, 0.3, 1) forwards;
          `
  } else {
    return isOn
      ? css`
            transform: translateX(20px);
          `
      : css`
            transform: translateX(0);
          `
  }
}}
`

export default Toggle
