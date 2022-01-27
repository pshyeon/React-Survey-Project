import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import AddSurvey from './AddSurvey'
import AddSurveyTitleList from './AddSurveyTitleList'

class AddSurveyList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      SURVEY_NAME: '',
    }
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    this.addSurvey(this).then((response) => {
      console.log('response.data', response.data)
    })
    this.setState({
      SURVEY_NAME: '',
    })

    window.location.reload()
    alert('설문지가 생성되었습니다.')
  }

  handleValueChange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value

    this.setState(nextState)
    console.log(this.state)
  }
  addSurvey = () => {
    const url = '/api/questions'
    let body = {
      SURVEY_NAME: this.state.SURVEY_NAME,
    }
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    return axios.post(url, body, config)
  }
  render() {
    return (
      <div>
        <h1>설문조사 리스트</h1>
        <Link to="/">
          <Button variant="contained">메인페이지로</Button>
        </Link>
        <AddSurvey />
        <AddSurveyTitleList />
      </div>
    )
  }
}

export default AddSurveyList
