import React from 'react'
import { Button } from '@mui/material'

const Square = ({ draw, index, type }) => {
  return (
    <Button
      disableRipple
      sx={{
        fontSize: '3rem',
        fontFamily: 'inherit',
        borderRadius: ' 0px',
      }}
      className={`${type === 'contained' ? 'white' : null}`}
      variant={type}
      onClick={(e) => {
        draw(e, index)
      }}></Button>
  )
}

export default Square
