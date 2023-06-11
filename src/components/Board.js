import React, { useState, useEffect, useRef } from 'react'
import Square from './Square'

const Board = ({ reset, setReset, winner, setWinner, type }) => {
  const [turn, setTurn] = useState(0)
  const [data, setData] = useState(['', '', '', '', '', '', '', '', ''])
  const boardRef = useRef(null)

  const draw = (event, index) => {
    if (data[index - 1] === '' && winner === '') {
      const current = turn === 0 ? 'X' : 'O'

      data[index - 1] = current

      event.target.innerText = current

      setTurn(turn === 0 ? 1 : 0)
    }
  }

  useEffect(() => {
    setData(['', '', '', '', '', '', '', '', ''])

    const cells = boardRef.current.children

    for (let i = 0; i < 9; i++) {
      cells[i].innerText = ''
    }

    setTurn(0)
    setWinner('')
    setReset(false)
  }, [reset, setReset, setWinner])

  useEffect(() => {
    const checkRow = () => {
      let ans = false
      for (let i = 0; i < 9; i += 3) {
        ans |=
          data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== ''
      }

      return ans
    }

    const checkCol = () => {
      let ans = false
      for (let i = 0; i < 3; i++) {
        ans |=
          data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== ''
      }
      return ans
    }

    const checkDiagonal = () => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== '') ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== '')
      )
    }

    const checkWin = () => {
      return checkRow() || checkCol() || checkDiagonal()
    }

    const checkTie = () => {
      let count = 0
      data.forEach((cell) => {
        if (cell !== '') {
          count++
        }
      })
      return count === 9
    }

    if (checkWin()) {
      setWinner(turn === 0 ? 'O Wins!' : 'X Wins!')
    } else if (checkTie()) {
      setWinner('Tie !')
    }
  })

  return (
    <section className={`${turn && 'rotate'}`}>
      <h1>
        X {turn === 0 && '⬅️'} {turn === 1 && '➡️'} O
      </h1>
      <div ref={boardRef} className='board'>
        {data.map((item, index) => {
          return (
            <Square
              type={type}
              key={index}
              draw={draw}
              index={index + 1}
              winner={winner}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Board
