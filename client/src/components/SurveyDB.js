import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Survey1 from './Survey1.js'
import Header from './Header.js'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import {mergeClasses} from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

function SurveyDB() {
  const {q_id} = useParams()
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    fetch(`/api/questions/${q_id}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setSurveys(data)
      })
  }, [])
  return (
    <div>
      <Header type="고객용" />
      {surveys ? (
        surveys.map((survey) => {
          return (
            <Survey1
              key={survey.q_id}
              userName={survey.userName}
              company={survey.company}
              gender={survey.gender}
              age={survey.age}
              q1={survey.q1}
              q2={survey.q2}
              q3={survey.q3}
              q4={survey.q4}
            />
          )
        })
      ) : (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell rowSpan="4" align="center">
                <CircularProgress
                  className={mergeClasses.progress}
                  variant="determinate"
                  value={this.state.completed}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
      <Link to="/result">결과값확인하기</Link>
    </div>
  )
}

export default SurveyDB
