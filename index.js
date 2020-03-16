const express = require('express')//here express is an object
const app = express()
const port = 3033
const fs = require('fs')

//configuring apps to read json data
app.use(express.json)

//Route || request handler
//app.httpMethod(url, callbk)

const users = [
    {id: 1, name: 'sara'},
    {id: 2, name:'same'}
]

app.get('/', function(req,res){
    res.send('welcome to the website')
})

app.get('/users', (req,res) => {
    fs.readFile('./data.json','utf-8', (err, data) => {
        if(err){
            console.log(err)
        } else {
            const users = JSON.parse(data)
            res.json(users)
        }
    })
})

app.get('/users/:id', (req,res) => {
    const id = this.params.id
    const user = users.find(user => {user.id === id})
    if(user){
        res.json(user)
    } else {
        res.json({})
    }
})

app.post('/users', (err, data) => {
    const user = req.body
    fs.readFile('./data.json', 'utf-8' , (err, data) => {
        if(err) {
            res.json(err)
        } else {
            const users = JSON.parse(data)
        }
    })
})

app.put('/users/:id', (req,res) => {
    const id = req.params.id
    const body = req.body
    res.json({
        id,body
    })
})

app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    
})

app.listen(port, ()=>{
    console.log('listening on port', port)
})

