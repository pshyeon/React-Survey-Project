import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

class AddSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      surveyName: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addSurvey = this.addSurvey.bind(this)
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    this.addSurvey(this).then((response) => {
      console.log('response.data', response.data)
    })
    this.setState({
      surveyName: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
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
      surveyName: this.state.surveyName,
      q1: this.state.q1,
      q2: this.state.q2,
      q3: this.state.q3,
      q4: this.state.q4,
      q5: this.state.q5,
      q6: this.state.q6,
      q7: this.state.q7,
      q8: this.state.q8,
      q9: this.state.q9,
      q10: this.state.q10,
      q11: this.state.q11,
      q12: this.state.q12,
      q13: this.state.q13,
      q14: this.state.q14,
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
          <div>
            <label>설문조사명</label>
            <Input
              type="text"
              name="surveyName"
              placeholder="설문조사명"
              value={this.state.surveyName}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <label>질문1</label>
            <Input type="text" name="q1" placeholder="질문1" value={this.state.q1} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문2</label>
            <Input type="text" name="q2" placeholder="질문2" value={this.state.q2} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문3</label>
            <Input type="text" name="q3" placeholder="질문3" value={this.state.q3} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문4</label>
            <Input type="text" name="q4" placeholder="질문4" value={this.state.q4} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문5</label>
            <Input type="text" name="q5" placeholder="질문5" value={this.state.q5} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문6</label>
            <Input type="text" name="q6" placeholder="질문6" value={this.state.q6} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문7</label>
            <Input type="text" name="q7" placeholder="질문7" value={this.state.q7} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문8</label>
            <Input type="text" name="q8" placeholder="질문8" value={this.state.q8} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문9</label>
            <Input type="text" name="q9" placeholder="질문9" value={this.state.q9} onChange={this.handleValueChange} />
          </div>
          <div>
            <label>질문10</label>
            <Input
              type="text"
              name="q10"
              placeholder="질문10"
              value={this.state.q10}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <label>질문11</label>
            <Input
              type="text"
              name="q11"
              placeholder="질문11"
              value={this.state.q11}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <label>질문12</label>
            <Input
              type="text"
              name="q12"
              placeholder="질문12"
              value={this.state.q12}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <label>질문13</label>
            <Input
              type="text"
              name="q13"
              placeholder="질문13"
              value={this.state.q13}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <label>질문14</label>
            <Input
              type="text"
              name="q14"
              placeholder="질문14"
              value={this.state.q14}
              onChange={this.handleValueChange}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            저장하기
          </Button>
        </form>
        <Link to="/">
          <Button variant="contained">메인페이지로</Button>
        </Link>
      </div>
    )
  }
}

export default AddSurvey
