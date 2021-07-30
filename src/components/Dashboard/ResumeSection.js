import React from 'react'
import ResumeItem from './ResumeItem'
import styled from 'styled-components'

const items = [
  {
    title: 'Novas Tarefas',
    subtitle: 'Total de tarefas',
    total: 0,
    color: '#7775E7',
    id: 1
  },
  {
    title: 'Tarefas em progresso',
    subtitle: 'Total de tarefas',
    total: 0,
    color: '#FDCA49',
    id: 2
  },
  {
    title: 'Tarefas Concluidas',
    subtitle: 'Total de tarefas',
    total: 0,
    color: '#F37C7C',
    id: 3
  },
  { title: 'Total de Tarefas', subtitle: '', total: 0, color: '#848484' }
]

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`

export default function ResumeSection() {
  return (
    <Container>
      {items.map(item => {
        return <ResumeItem item={item} key={item.id} />
      })}
    </Container>
  )
}
