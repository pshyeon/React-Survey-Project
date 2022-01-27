import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import TableHeader from './TableHeader.js'
import Customer from './Customer.js'
import Header from './Header.js'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CircularProgress from '@material-ui/core/CircularProgress'
import {mergeClasses} from '@material-ui/styles'

class CustomerDB extends React.Component {
  state = {
    customers: '',
    questions: '',
    completed: 0,
  }
  componentDidMount() {
    this.timer = setInterval(this.progress, 20)
    this.callApi()
      .then((res) => this.setState({customers: res}))
      //.then((res) => this.setState({questions: res}))
      .catch((err) => console.log(err))
  }
  callApi = async () => {
    const response = await fetch('/api/customers')
    const body = await response.json()
    return body
  }
  progress = () => {
    const {completed} = this.state
    this.setState({completed: completed >= 100 ? 0 : completed + 1})
  }
  render() {
    return (
      <div>
        <Header type="결과" />
        <Table>
          <TableHead>
            <TableHeader />
          </TableHead>
          <TableBody>
            {this.state.customers ? (
              this.state.customers.map((c) => {
                return (
                  <Customer
                    key={c.id}
                    userName={c.userName}
                    company={c.company}
                    gender={c.gender}
                    age={c.age}
                    question1={c.question1}
                  />
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan="5" align="center">
                  <CircularProgress
                    className={mergeClasses.progress}
                    variant="determinate"
                    value={this.state.completed}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Link to="/survey">설문조사하기</Link>
      </div>
    )
  }
}

export default CustomerDB
