import {useState, useEffect} from 'react'

import useFetch from '../hook/useFetch.js'

function SurveyTitle(props) {
  const surveys = useFetch(`/api/surveys/${props.title_number}`)

  return (
    <div>
      {surveys.map((survey) => (
        <h1 key={survey.id}>{survey.TITLE}</h1>
      ))}
    </div>
  )
}

export default SurveyTitle
