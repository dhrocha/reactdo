import React from 'react'

export default function TaskItem({ task }) {
  return (
    <div>
      <div>{task.name}</div>
      <div>{task.type}</div>
      <div>{task.description}</div>
      <div>{task.progress}</div>
    </div>
  )
}
