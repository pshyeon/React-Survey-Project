import React, {Component} from 'react'
import {useState, useEffect} from 'react'

import AddSurveyTitle from './AddSurveyTitle'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

function AddSurveyTitleList() {
  const [surveys, setSurveys] = useState([])
  const [surveyNumber, setSurveyNumber] = useState([])
  const [questions, setQuestions] = useState([])

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
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>순번</TableCell>
            <TableCell>설문조사명</TableCell>
            <TableCell>질문추가하기</TableCell>
            <TableCell>수정/삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {surveys.map((survey, index) => (
            <AddSurveyTitle key={survey.id} id={survey.id} title={survey.TITLE} index={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AddSurveyTitleList
