// Importando modulos
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express() // Criando uma instancia do aplicativo Express
app.use(bodyParser.json())
const api = require('./rotas/index')
app.use('/api', api)
const PORT = process.env.PORT // Porta na qual o servidor sera ouvido


// Definindo uma rota para o metodo HTTP
app.get('/', (req, res)=>{
    res.json({
        success: true
    })
})




app.listen(PORT)
