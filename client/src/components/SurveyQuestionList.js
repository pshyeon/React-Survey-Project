import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Question from './Question.js'
import Header from './Header.js'
import useFetch from '../hook/useFetch.js'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  main: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

function SurveyQuestionList() {
  const classes = useStyles()

  const items = useFetch(`/api/survey_items`)

  return (
    <div className={classes.main}>
      <Header QUESTION_NUMBER="1" />
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <Question id={item.id} survey_item={item.SURVEY_ITEM} />
            <p>반복</p>
          </div>
        ))}
      </div>
      <Link to="/result">
        <Button variant="contained" color="secondary">
          제출하기
        </Button>
      </Link>

      <Link to="/">
        <Button variant="contained">메인페이지로</Button>
      </Link>
    </div>
  )
}

export default SurveyQuestionList
