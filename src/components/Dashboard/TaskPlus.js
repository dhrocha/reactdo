import { Add } from '@material-ui/icons'
import { useAtom } from 'jotai'
import React from 'react'
import styled from 'styled-components'
import { openEditAtom } from '../Atoms'

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
  //eslint-disable-next-line
  const [openEditDialog, setOpenEditDialog] = useAtom(openEditAtom)

  return (
    <Container onClick={() => setOpenEditDialog({ type: 'Nova', open: true })}>
      <Add style={{ fontSize: '70px' }} />
    </Container>
  )
}
