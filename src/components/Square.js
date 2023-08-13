import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../context'

export default function Square({ draw, index }) {
  const { theme } = useGlobalContext()

  return <Cell t={theme} onClick={(e) => draw(e, index)} />
}

const Cell = styled('div')(({ t }) => ({
  transition: ' background .3s',
  background: t ? 'var(--bg-p-400)' : 'var(--bg-p-50)',
  fontSize: '3rem',
  border: '1px solid var(--table-line)',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  color: t ? 'var(--text-50)' : 'var(--text-800)',
  position: 'relative',

  ':hover': {
    background: t ? 'var(--bg-p-500)' : 'var(--bg-p-100)',
  },
}))
