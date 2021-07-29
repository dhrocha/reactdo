import { useAtom } from 'jotai'
import React from 'react'
import { tasksAtom } from '../Atoms'
import styled from 'styled-components'
import TaskItem from './TaskItem'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`

export default function TaskSection() {
  const [tasks] = useAtom(tasksAtom)

  console.log(tasks)

  return (
    <Container>
      {tasks.map(task => {
        return <TaskItem task={task} />
      })}
    </Container>
  )
}
