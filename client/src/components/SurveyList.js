import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Survey from './Survey.js'

import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
const useStyles = makeStyles((theme) => ({
  main: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

function SurveyList() {
  const classes = useStyles()
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    fetch(`/api/surveys`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setSurveys(data)
      })
  }, [])
  return (
    <div className={classes.main}>
      <h1>TEF 설문조사 리스트</h1>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>순번</TableCell>
              <TableCell>설문지명</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {surveys.map((survey, index) => (
              <Survey key={survey.id} index={index + 1} id={survey.id} title={survey.TITLE} />
            ))}
          </TableBody>
        </Table>
      </div>
      <Button variant="contained" color="secondary">
        <Link to="/result">결과보기</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/add_survey">설문조사 만들기</Link>
      </Button>
    </div>
  )
}

export default SurveyList
