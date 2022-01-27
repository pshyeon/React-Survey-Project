import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

class AddSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TITLE: '',
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.addSurvey(this).then((response) => {
      console.log('response.data', response.data)
    })
    this.setState({
      TITLE: '',
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
    const url = '/api/surveys'
    let body = {
      TITLE: this.state.TITLE,
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
        <form onSubmit={this.handleFormSubmit}>
          <label>설문조사명</label>
          <Input
            type="text"
            name="TITLE"
            placeholder="설문조사명"
            value={this.state.TITLE}
            onChange={this.handleValueChange}
          />
          <Button type="submit" variant="contained" color="primary">
            저장하기
          </Button>
        </form>
      </div>
    )
  }
}

export default AddSurvey
