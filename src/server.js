// Servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// Configuração nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
// Receber os dados do body (pages.js)
    .use(express.urlencoded({ extended: true}))
// Configuração de arquivos estáticos
    .use(express.static("public"))
// Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
// Start do servidor
    .listen(5500)