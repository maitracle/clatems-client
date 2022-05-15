import React, { ChangeEvent, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { SignRequestPayload } from 'store/user/types'
import { signIn, signUp } from 'store/user/actions'
import Input from 'components/forms/Input'
import { GrayColors } from 'styles/colors'
import Button from 'components/Button'
import StyledLink from 'components/StyledLink'
import Caption1 from 'components/typographies/Caption1'


enum SignRequestPayloadKeys {
  email = 'email',
  password = 'password',
  name = 'name',
  phone = 'phone',
}

type Props = {
  signAction: typeof signUp | typeof signIn;
}

const SignForm = ({ signAction }: Props) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<SignRequestPayload>({
    email: '',
    password: '',
  })

  const setFormDataFactory = (key: SignRequestPayloadKeys) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: e.target.value,
      }
    })
  }

  const handleSignAction = () => {
    dispatch(signAction.request(formData))
  }

  return (
    <Wrapper>
      <Label>
        이메일
      </Label>

      <InputWrapper>
        <Input value={formData.email} onChange={setFormDataFactory(SignRequestPayloadKeys.email)} />
      </InputWrapper>

      <Label>
        비밀번호
      </Label>

      <InputWrapper>
        <Input
          type='password'
          value={formData.password}
          onChange={setFormDataFactory(SignRequestPayloadKeys.password)}
        />
      </InputWrapper>
      {signAction === signIn && <StyledLink to={'/sign-up'}>
        <Caption1 fontColor={GrayColors.gray800} underline>
          회원가입
        </Caption1>
      </StyledLink>}

      <ButtonWrapper>
        <Button onClick={handleSignAction}>
          {signAction === signUp && '가입하기'}
          {signAction === signIn && '로그인'}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 20px;
`

const Label = styled.div`
  margin-top: 31px;

  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: ${GrayColors.gray500};
`

const InputWrapper = styled.div`
  margin-top: 8px;
`

const ButtonWrapper = styled.div`
  margin-top: 100px;
`

export default SignForm
