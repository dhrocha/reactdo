import React from 'react'
import styled from 'styled-components'

const Panel = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  width: 25%;
  margin: 6px;
  min-height: 80px;
  padding: 10px 20px 10px 20px;
`

const Number = styled.div`
  border: 4px solid white;
  padding: 5px 20px 5px 20px;
  font-size: 3rem;
  border-radius: 50%;
  font-weight: bold;
  color: white;
`

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
`

const SubTitle = styled.div`
  color: white;
  font-size: 12px;
`

export default function ResumeItem({ item }) {
  return (
    <Panel style={{ backgroundColor: item.color }}>
      <div>
        <Title>{item.title}</Title>
        <SubTitle>{item.subtitle}</SubTitle>
      </div>
      <div>
        <Number>{item.total}</Number>
      </div>
    </Panel>
  )
}
