import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../img/logo_test.png'
import { Alert } from '@material-ui/lab'

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
  height: 300px;
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

const Messages = styled.div`
  margin: 20px 0px 0px 0px;
`

export default function Index() {
  const [form, setForm] = useState({ email: '', pwd: '' })
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = () => {
    const { email, pwd } = form

    if (email === '' || pwd === '') {
      setError('Preencha todos os campos')
      return false
    }

    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

    if (!emailValid) {
      setError('Email invalido!')
      return false
    }

    setMessage('Aguarde...')
    setTimeout(() => {
      window.location = '/dashboard'
    }, 2000)
  }

  const handleChange = e => {
    setError('')
    const { id, value } = e.target
    setForm({ ...form, [id]: value })
  }

  return (
    <MainLogin>
      <LoginForm>
        <Logo />

        <TextField
          id='email'
          label='Email'
          variant='outlined'
          fullWidth
          size='small'
          style={{
            backgroundColor: 'whitesmoke',
            margin: 8
          }}
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          id='pwd'
          label='Senha'
          variant='outlined'
          type='password'
          fullWidth
          size='small'
          style={{
            backgroundColor: 'whitesmoke',
            margin: 8
          }}
          value={form.pwd}
          onChange={handleChange}
        />
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        <Messages>
          {message && <Alert severity='info'>{message}</Alert>}
          {error && <Alert severity='error'>{error}</Alert>}
        </Messages>
      </LoginForm>
      <ForgotPassword>Esqueceu a senha ou e primeiro acesso?</ForgotPassword>
    </MainLogin>
  )
}
