import styled from '@emotion/styled';
import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { GrayColors } from 'styles/colors';
import { FontWeights } from 'styles/fonts';
import Caption1, { IconType } from 'components/typographies/Caption1';
import ClearIcon from 'assets/images/Form/Clear.svg';
import CalendarIcon from 'assets/images/Form/Calendar.svg';
import { css } from '@emotion/react';


export enum IconNames {
  CLEAR = 'CLEAR',
  CALENDAR = 'CALENDAR',
}

type IconPropsType = {
  name: IconNames,
  event?: Function,
}

type Props = InputHTMLAttributes<HTMLInputElement> & {
  withError?: boolean,
  errorMessage?: string,
  iconProps?: IconPropsType
  unitText?: string;
}

class Input extends React.Component<Props> {
  private readonly myRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    inputOffsetWidth: 0,
  };

  componentDidMount() {
    this.setInputOffsetWidth(this.state.inputOffsetWidth);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{ inputOffsetWidth: number }>, snapshot?: any) {
    this.setInputOffsetWidth(prevState.inputOffsetWidth);
  }

  setInputOffsetWidth(prevWidth: number) {
    if (prevWidth !== this.myRef.current?.offsetWidth) {
      this.setState({
        inputOffsetWidth: this.myRef.current?.offsetWidth,
      });
    }
  }

  handleIconClick() {
    const { iconProps, ...attributes } = this.props;
    if (iconProps?.event) {
      iconProps.event();
    }

    if (iconProps?.name === IconNames.CLEAR) {
      const { onChange, name } = attributes;

      if (onChange) {
        const changeEvent = {
          target: {
            name,
            value: '',
          },
        } as ChangeEvent<HTMLInputElement>;

        onChange(changeEvent);
      }
    }
  }

  render() {
    const {
      withError,
      errorMessage,
      iconProps,
      unitText,
      ...attributes
    } = this.props;

    return (
      <>
        <Holder ref={this.myRef}>
          {attributes.value}
        </Holder>
        <Wrapper>
          <InputWithUnitWrapper>
            <StyledInput
              {...attributes} width={!!attributes.value && !!unitText ? `${this.state.inputOffsetWidth}px` : '100%'}
            />
            {!!attributes.value && !!unitText && <Unit>{unitText}</Unit>}
          </InputWithUnitWrapper>

          {iconProps?.name && <IconButton icon={iconProps.name} onClick={this.handleIconClick.bind(this)} />}
        </Wrapper>
        <ErrorWrapper>
          {errorMessage && <Caption1 type={IconType.Warning}>
            {errorMessage}
          </Caption1>}
        </ErrorWrapper>
      </>
    );
  }
}


const Holder = styled.div`
  visibility: hidden;
  height: 0;
  width: fit-content;

  font-weight: ${FontWeights.medium};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: ${GrayColors.gray900};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2px ${GrayColors.gray500};
  padding: 2px;
`;

const InputWithUnitWrapper = styled.div`
  display: flex;
`;

const StyledInput = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  height: 28px;
  padding: 0;
  border: none;
  background-color: transparent;

  font-weight: ${FontWeights.medium};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: ${GrayColors.gray900};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${GrayColors.gray300};
  }
`;

const Unit = styled.div`
  font-weight: ${FontWeights.medium};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: ${GrayColors.gray900};
`;

const IconButton = styled.button<{ icon?: IconNames }>`
  width: 16px;
  height: 16px;
  margin-top: 8px;
  background: #fff;
  background-size: cover;
  border: none;
  outline: none;
  cursor: pointer;

  ${(props) => {
    switch (props.icon) {
      case IconNames.CLEAR:
        return css`
          background-image: url("${ClearIcon}") !important;
        `;
      case IconNames.CALENDAR:
        return css`
          background-image: url("${CalendarIcon}") !important;
        `;
    }
  }};
`;

const ErrorWrapper = styled.div`
  height: 14px;
`;

export default Input;
