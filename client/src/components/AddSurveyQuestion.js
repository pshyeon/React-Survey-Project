import React, {Component} from 'react'
import {useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

import AddItemList from './AddItemList.js'
import SurveyTitle from './SurveyTitle.js'
import useFetch from '../hook/useFetch.js'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function AddSurveyQuestion(props) {
  const {id} = useParams()

  const [addQuestion, setAddQuestion] = useState([])
  const [addQuestionList, setAddQuestionList] = useState([])
  const [number, setNumber] = useState(1)

  const surveyTitle = useFetch(`/api/add_survey_items/${id}`)

  function questionList(e) {
    if (surveyTitle == '') {
      fetch(`/api/survey_items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ID: id * 10000 + 1,
          TITLE_NUMBER: id,
          SURVEY_ITEM: questionRef.current.value,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('질문이 생성되었습니다')
        }
      })
    } else {
      fetch(`/api/survey_items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ID: Number(numRef.current.value) + 1,
          TITLE_NUMBER: id,
          SURVEY_ITEM: questionRef.current.value,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('질문이 생성되었습니다')
        }
      })
    }
    // setNumber(number + 1)
  }

  const questionRef = useRef(null)
  const numRef = useRef(null)
  return (
    <div>
      <Link to="/add_survey">
        <SurveyTitle title_number={id} />
      </Link>
      <AddItemList title_number={id} />
      <form onSubmit={questionList}>
        {surveyTitle.map((c) => (
          <input type="hidden" key={c.id} ref={numRef} value={c.id} />
        ))}
        <input ref={questionRef} name={'question' + number} type="text" />

        <Button type="submit" variant="outlined">
          질문추가
        </Button>
      </form>
    </div>
  )
}

export default AddSurveyQuestion
