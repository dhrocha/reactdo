import { Button, TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo_test.png'

const MainLogin = styled.div`
  background-color: #8383ff;
  height: 100vh;
  margin: -8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LoginForm = styled.div`
  width: 30%;
  background-color: #fff;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`

const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 150px;
  height: 100px;
  margin-top: 10px;
`

const ForgotPassword = styled.div`
  color: white;
  font-size: 14px;
  margin: 20px;
`

export default function Index() {
  return (
    <MainLogin>
      <LoginForm>
        <Logo />

        <TextField
          id='user'
          label='Email'
          variant='outlined'
          fullWidth
          size='small'
          style={{
            backgroundColor: 'whitesmoke',
            margin: 8
          }}
        />
        <TextField
          id='senha'
          label='Senha'
          variant='outlined'
          type='password'
          fullWidth
          size='small'
          style={{
            backgroundColor: 'whitesmoke',
            margin: 8
          }}
        />
        <Button variant='contained' color='primary' fullWidth>
          Login
        </Button>
      </LoginForm>
      <ForgotPassword>Esqueceu a senha ou e primeiro acesso?</ForgotPassword>
    </MainLogin>
  )
}
