import './App.css'
import React, {Component} from 'react'
import SurveyDB from './components/SurveyDB.js'
import CustomerDB from './components/CustomerDB.js'
import AddSurveyList from './components/AddSurveyList.js'
import EmptyPage from './components/EmptyPage.js'
import SurveyList from './components/SurveyList.js'
import QuestionList from './components/QuestionList.js'
import AddSurveyQuestion from './components/AddSurveyQuestion'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* //<Route path="/" element={<Main />}></Route> */}
            <Route path="/" element={<SurveyList />}></Route>
            <Route path="/surveys/:id" element={<QuestionList />}></Route>
            <Route path="/survey/:q_id" element={<SurveyDB />}></Route>
            <Route path="/result" element={<CustomerDB />}></Route>
            <Route path="/add_survey" element={<AddSurveyList />}></Route>
            <Route path="/add_question/:id" element={<AddSurveyQuestion />}></Route>
            <Route path="/*" element={<EmptyPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App