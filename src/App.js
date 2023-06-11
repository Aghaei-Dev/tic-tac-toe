import React, { useState } from 'react'
import { Button, Alert } from '@mui/material'

import { styled } from '@mui/material/styles'

import Board from './components/Board'
function App() {
  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState('')
  const [type, setType] = useState('outlined')

  return (
    <div className='App'>
      <BtnContainer>
        {
          <Button
            variant={type}
            onClick={() => {
              if (type === 'contained') {
                setType('outlined')
              } else {
                setType('contained')
              }
            }}>
            {type}
          </Button>
        }
      </BtnContainer>
      {winner && (
        <Alert
          className='alert'
          variant='outlined'
          severity='info'
          action={
            <Button
              variant='outlined'
              color='info'
              size='small'
              onClick={() => {
                setReset(true)
              }}>
              Reset
            </Button>
          }>
          {winner}
        </Alert>
      )}

      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
        type={type}
      />
    </div>
  )
}

export default App

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
  button: {
    margin: '0.3rem',
    width: '100px',
  },
}))
