import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Board } from './components'
import { useGlobalContext } from './context'

export default function App() {
  const { theme, toggleTheme } = useGlobalContext()
  return (
    <Wrapper>
      <BtnContainer>
        <Button variant='outlined' onClick={toggleTheme}>
          {`${theme ? '💙' : '🤍'}`}
        </Button>
      </BtnContainer>
      <Board />
    </Wrapper>
  )
}

const BtnContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  right: 0,
  margin: '2rem',
  padding: '1rem',
  borderRadius: ' var(--radius)',
  boxShadow: 'var(--light-shadow)',
  transition: 'var(--transition)',

  ':hover': {
    boxShadow: 'var(--dark-shadow)',
  },
}))

const Wrapper = styled('section')(() => ({
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  backgroundColor: ' var(--clr-grey-10)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '5vh',
  transition: 'var(--transition)',
}))
