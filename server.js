const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5001

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.urlencoded())

const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data)
const mariadb = require('mysql')

const connection = mariadb.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
})
connection.connect()

/* 
1. get
2. post
3. delete
4. put
 */

//1. get
app.get('/api/customers', (req, res) => {
  connection.query('SELECT * FROM CUSTOMER', (err, rows, fields) => {
    res.send(rows)
  })
})

app.get('/api/surveys', (req, res) => {
  connection.query('SELECT * FROM SURVEY_TITLE', (err, rows, fields) => {
    res.send(rows)
  })
})

app.get('/api/surveys/:id', (req, res) => {
  console.log('header sql臾� �뺤씤', req.params)
  const {id} = req.params
  console.log('surveys id 媛� �뺤씤', id)
  connection.query(`SELECT * FROM SURVEY_TITLE where id = ${id}`, (err, rows, fields) => {
    res.send(rows)
  })
})
app.get('/api/survey_items', (req, res) => {
  connection.query('SELECT * FROM SURVEY_ITEM', (err, rows, fields) => {
    res.send(rows)
  })
})
//ItemList�먯꽌 �ㅻЦ議곗궗�� �대떦 吏덈Ц�ㅼ쓽 紐⑸줉 媛��몄샂
app.get('/api/survey_items/:TITLE_NUMBER', (req, res) => {
  const {TITLE_NUMBER} = req.params
  console.log('title_survey �뺤씤', TITLE_NUMBER)
  connection.query(`SELECT * FROM SURVEY_ITEM WHERE  TITLE_NUMBER = ${TITLE_NUMBER}`, (err, rows, fields) => {
    res.send(rows)
  })
})
//ItemList�먯꽌 �ㅻЦ議곗궗�� �대떦 吏덈Ц 1媛� 媛��몄샂
app.get('/api/survey_item/:ID', (req, res) => {
  const {ID} = req.params
  console.log('item id媛� �뺤씤', ID)
  connection.query(`SELECT * FROM SURVEY_ITEM WHERE  ID = ${ID}`, (err, rows, fields) => {
    res.send(rows)
  })
})
//addSurQuestion�먯꽌 留덉�留� Id媛� 媛��몄삤�� 以�
app.get('/api/add_survey_items/:TITLE_NUMBER', (req, res) => {
  const {TITLE_NUMBER} = req.params
  console.log('title_number �뺤씤', TITLE_NUMBER)
  connection.query(
    `SELECT id FROM SURVEY_ITEM where TITLE_NUMBER = ${TITLE_NUMBER} ORDER BY id desc LIMIT 1`,
    (err, rows, fields) => {
      res.send(rows)
    },
  )
})
app.get('/api/survey_contents/:QUESTION_NUMBER', (req, res) => {
  const {QUESTION_NUMBER} = req.params
  connection.query(`SELECT * FROM SURVEY_CONTENT1 where QUESTION_NUMBER = ${QUESTION_NUMBER}`, (err, rows, fields) => {
    res.send(rows)
  })
})
app.get('/api/questions/:q_id', (req, res) => {
  const {q_id} = req.params
  connection.query(`SELECT * FROM question where q_id = ${q_id}`, (err, rows, fields) => {
    res.send(rows)
  })
})

app.get('/api/questions', (req, res) => {
  connection.query(`SELECT * FROM question`, (err, rows, fields) => {
    res.send(rows)
  })
})
//2. post
app.post('/api/surveys', (req, res) => {
  let title = req.body.TITLE
  let sql = 'INSERT INTO SURVEY_TITLE VALUES (null, ?);'

  connection.query(sql, title, (err, rows, fields) => {
    res.send(rows)
  })
})
app.post('/api/survey_items', (req, res) => {
  let title_number = req.body.TITLE_NUMBER
  let item = req.body.SURVEY_ITEM
  let id = req.body.ID
  console.log('吏덈Ц POST')
  let sql = `INSERT INTO SURVEY_ITEM values(?, ?, ?)`
  let params = [id, title_number, item]
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows)
  })
})

app.post('/api/questions', (req, res) => {
  let sql = 'INSERT INTO SURVEY_ITEM VALUES (null, ?)'
  let surveyName = req.body.surveyName
  let q1 = req.body.q1
  let params = [surveyName, q1]
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows)
  })
})

app.post('/api/customers', (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)'
  let userName = req.body.userName
  let company = req.body.company
  let gender = req.body.gender
  let age = req.body.age
  let question1 = req.body.question1
  let params = [userName, company, gender, age, question1]
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows)
  })
})
//3. delete

app.delete('/api/survey/:id', (req, res) => {
  const {id} = req.params
  console.log('�ㅻЦ吏� ��젣踰꾪듉 �ㅽ뻾 id媛� �뺤씤', id)
  connection.query(`DELETE FROM SURVEY_TITLE where id = ${id}`, (err, rows, fields) => {
    res.send(rows)
  })
})

app.delete('/api/survey_item/:ID', (req, res) => {
  const {ID} = req.params
  console.log('吏덈Ц ��젣踰꾪듉 �ㅽ뻾 Id媛� �뺤씤', ID)
  connection.query(`DELETE FROM SURVEY_ITEM where ID = ${ID}`, (err, rows, fields) => {
    res.send(rows)
  })
})
app.listen(port, () => console.log(`Listening on port ${port}`))