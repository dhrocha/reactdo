import React, { useEffect, useState } from 'react'
import ResumeItem from './ResumeItem'
import styled from 'styled-components'
import { tasksAtom } from '../Atoms'
import { useAtom } from 'jotai'

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
  const [tasks] = useAtom(tasksAtom)
  const [resumeItems, setResumeItems] = useState([])

  useEffect(() => {
    const newTasks = tasks?.filter(item => item.progress === 0, 0)
    const openedTasks = tasks?.filter(
      item => item.progress > 0 && item.progress !== 100,
      0
    )
    const closedTasks = tasks?.filter(item => item.progress === 100, 0)

    const resumeTasks = items.map(item => {
      const getValue = () => {
        switch (item.id) {
          case 1:
            return newTasks.length
          case 2:
            return openedTasks.length
          case 3:
            return closedTasks.length
          default:
            return tasks.length
        }
      }
      return {
        ...item,
        total: getValue()
      }
    })

    setResumeItems(resumeTasks)
  }, [tasks])

  return (
    <Container>
      {resumeItems.map(item => {
        return <ResumeItem item={item} key={item.id} />
      })}
    </Container>
  )
}
