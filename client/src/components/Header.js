import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
  const [header, setHeader] = useState([])

  useEffect(() => {
    fetch(`/api/surveys/${props.QUESTION_NUMBER}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setHeader(data)
      })
  }, [])

  return (
    <div>
      {header.map((h) => (
        <h1 key={h.id}>
          <Link to="/">{h.TITLE}</Link>
        </h1>
      ))}
      <br />
    </div>
  )
}

export default Header
