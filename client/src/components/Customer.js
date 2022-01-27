import React, {Component} from 'react'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.userName}</TableCell>
        <TableCell>{this.props.company}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.age}</TableCell>
        <TableCell>{this.props.question1}</TableCell>
      </TableRow>
    )
  }
}

export default Customer
