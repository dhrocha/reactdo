import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo_test.png'

const StyledNav = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding-right: 50px;
  padding-left: 50px;
`

const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 150px;
  height: 50px;
  margin-top: 10px;
  background-size: 100px;
`

export default function Nav() {
  return (
    <StyledNav>
      <Logo />
      <Button
        variant='contained'
        color='primary'
        size='small'
        onClick={() => {
          window.location = '/'
        }}
      >
        Sair
      </Button>
    </StyledNav>
  )
}
