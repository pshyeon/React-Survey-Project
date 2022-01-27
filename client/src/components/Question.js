import React, {Component} from 'react'
import {useState, useEffect} from 'react'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

function Question(props) {
  const [contents, setContents] = useState([])

  useEffect(() => {
    fetch(`/api/survey_contents/${props.id}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setContents(data)
      })
  }, [])
  return (
    <div>
      <div>
        <h3>{props.survey_item}</h3>
      </div>
      {contents.map((content) => (
        <div key={content.id}>
          <label>
            <input type="radio" name={content.QUESTION_NUMBER} value={content.CONTENT} />
            {content.CONTENT}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Question
