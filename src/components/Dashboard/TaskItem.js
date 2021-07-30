import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const TaskTitle = styled.div`
  font-weight: bold;
  font-size: 12px;
`

const Container = styled.div`
  border-radius: 5px;
  border: 1px solid #cccccc;
  border-left: 6px solid ${props => props.theme.color};
  padding: 10px;
  background-color: white;
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 6px 5px 0px;
  min-height: 150px;

  :hover {
    box-shadow: 0 0 1em gray;
    cursor: pointer;
  }
`

const Badge = styled.div`
  border-radius: 20px;
  background-color: ${props => props.theme.bgColor};
  color: white;
  font-size: 10px;
  width: 50px;
  padding: 2px;
  margin: 5px 0px 5px 0px;
  display: flex;
  justify-content: center;
`

const TaskDescription = styled.div`
  font-size: 12px;
  margin: 20px 0px 15px 0px;
`
const ProgressBar = styled.div`
  background-color: #d3d3d3;
  border-radius: 10px;
  display: flex;
  height: 15px;
  font-size: 10px;
  font-weight: bold;
  align-items: center;

  div#filler {
    background-color: #7775e7;
    width: ${props => props.width}%;
    height: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
`

const SpanLabel = styled.div`
  display: flex;
  justify-content: center;
  padding: 5;
  color: 'white';
  width: ${props => 100 - props.width}%;
  font-weight: 'bold';
`

export default function TaskItem({ task }) {
  const { name, type, description, progress } = task

  const boxTheme = {
    color:
      progress === 0
        ? '#7775E7'
        : progress > 0 || progress < 100
        ? '#FDCA49'
        : '#F37C7C'
  }

  const typeBadgeTheme = {
    bgColor: type === 1 ? '#7775E7' : type === 2 ? '#F37C7C' : '#FDCA49'
  }

  const getType = () => {
    switch (type) {
      case 1:
        return 'Frontend'
      case 2:
        return 'Backend'
      case 3:
        return 'Infra'
      default:
        return false
    }
  }

  return (
    <ThemeProvider theme={boxTheme}>
      <Container>
        <TaskTitle>{name}</TaskTitle>
        <ThemeProvider theme={typeBadgeTheme}>
          <Badge>{getType()}</Badge>
        </ThemeProvider>
        <TaskDescription>{description}</TaskDescription>
        <ProgressBar width={progress}>
          <div id='filler'>
            {progress === 100 && (
              <SpanLabel width={progress}>{progress}%</SpanLabel>
            )}
          </div>
          {progress < 100 && (
            <SpanLabel width={progress}>{progress}%</SpanLabel>
          )}
        </ProgressBar>
      </Container>
    </ThemeProvider>
  )
}
