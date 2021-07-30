import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { currentTaskAtom, tasksAtom } from '../Atoms'
import { Alert } from '@material-ui/lab'

const Title = styled.div`
  font-weight: bold;
  padding: 20px 50px 20px 0px;
  border-bottom: 2px solid #ccccc;

  span#small {
    font-weight: normal;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px 0px 0px;
`

const taskTypes = [
  { label: 'Frontend', value: 1 },
  { label: 'Backend', value: 2 },
  { label: 'Infra', value: 3 }
]

export default function EditTask({ open, setOpen }) {
  const [currentTask, setCurrentTask] = useAtom(currentTaskAtom)
  const [tasks, setTasks] = useAtom(tasksAtom)
  const { type, name, progress, description } = currentTask
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    open.type === 'Nova' && setCurrentTask({})
    //eslint-disable-next-line
  }, [open])

  useEffect(() => {
    setMessage('')
    setError('')
  }, [])

  const handleChange = e => {
    setError('')
    const { id, value, name } = e.target

    id
      ? setCurrentTask({ ...currentTask, [id]: value })
      : setCurrentTask({ ...currentTask, [name]: value })
  }

  const handleSaveTask = () => {
    const { progress } = currentTask

    if (progress > 100) {
      setError('O progresso deve ser um valor entre 0 e 100')
      return false
    }

    const filtered = tasks.filter(t => t.id !== currentTask.id)
    filtered.push({ ...currentTask, progress: parseInt(progress) })
    const sorted = filtered.sort((a, b) => a.id - b.id)
    setTasks(sorted)
    setMessage('Tarefa atualizada!')
    setInterval(() => {
      setMessage('')
    }, 2000)
  }

  const handleAddTask = () => {
    const { name, progress, description } = currentTask

    if (progress > 100) {
      setError('O progresso deve ser um valor entre 0 e 100')
      return false
    }

    if (
      !name ||
      !progress ||
      !description ||
      name === '' ||
      progress === '' ||
      description === ''
    ) {
      setError('Preencha todos os campos para prosseguir.')
      return false
    }

    const arrayTasks = tasks
    const newCurrentTask = {
      ...currentTask,
      type: type ? type : 1,
      progress: parseInt(progress),
      id: tasks.length + 1
    }
    arrayTasks.push(newCurrentTask)
    setTasks(arrayTasks)

    setMessage('Tarefa incluida!')
    setInterval(() => {
      setMessage('')
    }, 1000)
  }

  return (
    <Dialog open={open.open} fullWidth>
      <DialogContent>
        <Title>
          {open.type} <span id='small'>tarefa</span>
        </Title>
        {message && <Alert severity='success'>{message}</Alert>}
        {error && <Alert severity='error'>{error}</Alert>}
        <Field>
          <TextField
            label='Nome da Tarefa'
            variant='outlined'
            fullWidth
            size='small'
            id='name'
            value={name}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <FormControl variant='outlined'>
            <InputLabel>Categoria</InputLabel>
            <Select
              name='type'
              value={type || 1}
              onChange={handleChange}
              label='Categoria'
            >
              {taskTypes.map(t => (
                <MenuItem value={t.value}>{t.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Field>
        <Field>
          <TextField
            label='Progresso'
            variant='outlined'
            fullWidth
            type='number'
            size='small'
            id='progress'
            defaultValue={progress}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <TextField
            label='Descricao da Tarefa'
            multiline
            rows={5}
            variant='outlined'
            rowsMax={5}
            fullWidth
            id='description'
            defaultValue={description}
            onChange={handleChange}
          />
        </Field>
      </DialogContent>
      <DialogActions>
        <Button
          color='secondary'
          onClick={() => setOpen({ ...open, open: false })}
        >
          Cancelar
        </Button>
        <Button
          color='primary'
          variant='outlined'
          onClick={
            open.type === 'Editar'
              ? () => handleSaveTask()
              : () => handleAddTask()
          }
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
