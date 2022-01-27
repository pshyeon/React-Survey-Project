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

function Main() {
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

  function addCount() {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div className={classes.main}>
      <Header />
      {questions.map((survey) => (
        <Button variant="contained" className="surveyButton" key={survey.q_id}>
          <Link to={`/survey/${survey.q_id}`}>{survey.survey_name}</Link>
        </Button>
      ))}
      <div>
        <Link to="/result">결과보기</Link>
      </div>
      <button onClick={addCount}>{count}</button>
      <Link to="/add_survey">
        <Button variant="contained" color="primary">
          설문조사 만들기
        </Button>
      </Link>
      <Link to="/add_question">
        <Button variant="contained" color="secondary">
          Survey
        </Button>
      </Link>
    </div>
  )
}

export default Main
