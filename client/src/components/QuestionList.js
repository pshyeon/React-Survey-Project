import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Question from './Question.js'
import Header from './Header.js'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {Tab} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  main: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

function QuestionList() {
  const classes = useStyles()
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`/api/survey_items`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setItems(data)
      })
  }, [])

  return (
    <div className={classes.main}>
      <Header QUESTION_NUMBER="1" />
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <Question id={item.id} survey_item={item.ITEM} />
            <p>반복</p>
          </div>
        ))}
      </div>
      <Link to="/result">
        <Button variant="contained" color="secondary">
          제출하기
        </Button>
      </Link>
    </div>
  )
}

export default QuestionList
