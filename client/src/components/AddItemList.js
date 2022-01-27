import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import useFetch from '../hook/useFetch.js'
import AddItem from './AddItem.js'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'

function AddItemList(props) {
  const items = useFetch(`/api/survey_items/${props.title_number}`)

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>순번</TableCell>
          <TableCell>질문</TableCell>
          <TableCell>수정/삭제</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item, index) => (
          <AddItem key={item.ID} id={item.ID} index={index} title={item.SURVEY_ITEM} />
        ))}
      </TableBody>
    </Table>
  )
}

export default AddItemList
