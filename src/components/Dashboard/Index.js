import React, { useEffect } from 'react'
import Nav from './Nav'
import ResumeSection from './ResumeSection'
import styled from 'styled-components'
import { openEditAtom, tasksAtom } from '../Atoms'
import { useAtom } from 'jotai'
import TaskSection from './TaskSection'
import EditTask from './EditTask'

const MainTitle = styled.div`
  font-weight: bold;
  padding: 20px 50px 20px 50px;
`

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  margin: -8px;
`

const MainTitleLight = styled.span`
  font-weight: normal;
`

export default function Index() {
  //eslint-disable-next-line
  const [tasks, setTasks] = useAtom(tasksAtom)
  const [openEditDialog, setOpenEditDialog] = useAtom(openEditAtom)

  const getData = async () => {
    //     const { data } = await axios.get(
    //       'https://fitec-teste-frontend.free.beeceptor.com/api/dashboard'
    //     )
    // //    console.log(JSON.parse(data))
    setTasks([
      {
        id: 1,
        name: 'Breadcrumb',
        description: 'Criar um novo breadcrumb para a aplicação web',
        progress: 0,
        type: 1
      },
      {
        id: 2,
        name: 'Navegação',
        description: 'Criar a navegação para a aplicação web',
        progress: 25,
        type: 1
      },
      {
        id: 3,
        name: 'Cross-origin',
        description:
          'Configurar os endpoints para não dar erro de cross origin',
        progress: 25,
        type: 2
      },
      {
        id: 4,
        name: 'AWS',
        description: 'Configurar a infra para CD/CI',
        progress: 70,
        type: 3
      },
      {
        id: 5,
        name: 'Integração API',
        description: 'Integrar o novo endpoint no front',
        progress: 30,
        type: 1
      },
      {
        id: 6,
        name: 'Endpoint Login',
        description: 'Criar endpoint para login',
        progress: 45,
        type: 2
      }
    ])
  }

  useEffect(() => {
    tasks.length === 0 && getData()
    //eslint-disable-next-line
  }, [tasks])

  return (
    <div>
      <Container>
        <Nav />
        <MainTitle>Dashboard</MainTitle>
        <ResumeSection />
        <MainTitle>
          <MainTitleLight>Lista de </MainTitleLight>tarefas
        </MainTitle>
        <TaskSection />
        <EditTask
          open={openEditDialog}
          setOpen={setOpenEditDialog}
          typeDialog='Nova'
        />
      </Container>
    </div>
  )
}
