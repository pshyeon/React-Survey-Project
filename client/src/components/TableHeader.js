import React, {Component} from 'react'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class TableHeader extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>이름</TableCell>
        <TableCell>회사</TableCell>
        <TableCell>성별</TableCell>
        <TableCell>나이</TableCell>
        <TableCell>점수</TableCell>
      </TableRow>
    )
  }
}

export default TableHeader
