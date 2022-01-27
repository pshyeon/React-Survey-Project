import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Header from './Header.js'

import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  main: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

function AddQuestion() {
  const classes = useStyles()
  const [questions, setQuestions] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch(`/api/questions`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setQuestions(data)
      })
  }, [])

  return (
    <div className={classes.main}>
      <form>
        <div>
          <label></label>
        </div>
        <button>저장하기</button>
      </form>
    </div>
  )
}

export default AddQuestion
