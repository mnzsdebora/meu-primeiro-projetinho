const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Debora Regina',
    imagem: 'https://drive.google.com/file/d/1pB4qX4MWzVuF4BqyfckqRmsPL0Wlzr3x/view?usp=drive_link',
    minibio: 'professora de física'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulher', mostraMulher))
app. listen(porta, mostraPorta)