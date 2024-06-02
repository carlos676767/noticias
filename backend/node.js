require("dotenv").config()
const express = require("express")
const app = express()

app.get("/login", (rq, res) => {
    try {
        res.send({ status: 200, response: "login efetuado com sucesso." })
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error", status: 500 })
    }
})


app.post('/registro', )

const port = 8070
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})