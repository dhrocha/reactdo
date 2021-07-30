import { Add } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 5px;
  border: 5px solid #7775e7;
  padding: 10px;
  background-color: #aaa8f0;
  width: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 6px 5px 0px;
  min-height: 150px;
  color: white;

  :hover {
    box-shadow: 0 0 1em gray;
    cursor: pointer;
  }
`

export default function TaskPlus() {
  return (
    <Container>
      <Add style={{ fontSize: '70px' }} />
    </Container>
  )
}
