import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import useFetch from '../hook/useFetch.js'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'

function AddSurveyTitle(props) {
  const items = useFetch(`/api/survey_item/${props.id}`)

  function del() {
    if (window.confirm('삭제하시겠습니까')) {
      console.log('삭제버튼')
      console.log(props.id)
      fetch(`/api/survey/${props.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }
  function modify() {
    console.log('수정하기 버튼입니다.')
    // fetch(`/api/survey_items/${props.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
  }
  return (
    <TableRow>
      <TableCell>{props.index + 1}</TableCell>
      <TableCell>{props.title}</TableCell>
      <TableCell>
        <Link to={`/add_question/${props.id}`}>
          <Button variant="outlined" color="primary">
            질문 추가하기
          </Button>
        </Link>
      </TableCell>
      <TableCell>
        <Button onClick={del} variant="contained" color="secondary">
          삭제하기
        </Button>
        <Button onClick={modify} variant="contained" color="primary">
          수정하기
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default AddSurveyTitle
