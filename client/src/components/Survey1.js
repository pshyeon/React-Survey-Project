import React, {Component} from 'react'
import axios from 'axios'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Survey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      company: '',
      gender: '',
      age: '',
      question1: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.addCustomer(this).then((response) => {
      console.log('response.data', response.data)
    })
    this.setState({
      userName: '',
      company: '',
      gender: '',
      age: '',
      question1: '',
    })

    window.location.reload()
    alert('설문이 완료되었습니다. 감사합니다.')
  }

  handleValueChange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value

    this.setState(nextState)
    console.log(this.state)
  }

  addCustomer = () => {
    const url = '/api/customers'
    let body = {
      userName: this.state.userName,
      company: this.state.company,
      gender: this.state.gender,
      age: this.state.age,
      question1: this.state.question1,
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
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{this.props.userName}</TableCell>
                <TableCell>{this.props.company}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="text" name="company" value={this.state.company} onChange={this.handleValueChange} />{' '}
                </TableCell>
                <TableCell>
                  <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="text" name="age" value={this.state.age} onChange={this.handleValueChange} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>질문</TableCell>
                <TableCell>아주 만족</TableCell>
                <TableCell>만족</TableCell>
                <TableCell>보통</TableCell>
                <TableCell>불만</TableCell>
                <TableCell>아주 불만</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{this.props.q1}</TableCell>
                <TableCell>
                  <input type="radio" name="question1" value="5" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question1" value="4" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question1" value="3" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question1" value="2" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question1" value="1" onChange={this.handleValueChange} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{this.props.q2}</TableCell>
                <TableCell>
                  <input type="radio" name="question2" value="5" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question2" value="4" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question2" value="3" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question2" value="2" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question2" value="1" onChange={this.handleValueChange} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{this.props.q3}</TableCell>
                <TableCell>
                  <input type="radio" name="question3" value="5" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question3" value="4" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question3" value="3" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question3" value="2" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question3" value="1" onChange={this.handleValueChange} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{this.props.q4}</TableCell>
                <TableCell>
                  <input type="radio" name="question4" value="5" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question4" value="4" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question4" value="3" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question4" value="2" onChange={this.handleValueChange} />
                </TableCell>
                <TableCell>
                  <input type="radio" name="question4" value="1" onChange={this.handleValueChange} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <button type="submit">추가하기</button>
        </form>
      </div>
    )
  }
}

export default Survey
