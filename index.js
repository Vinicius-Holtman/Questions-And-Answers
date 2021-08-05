const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(express.static('public'))

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use

// Routes
app.get('/', (req, res) => {
    res.render("index")
})

app.get('/perguntar', (req, res) => {
    res.render("perguntar")
})

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send(`recebido! <br> titulo: ${titulo} <br> descricao: ${descricao}`)
})

app.listen(7070, () => console.log("Server listening on 7070"))