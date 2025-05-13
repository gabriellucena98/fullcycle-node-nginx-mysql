const express = require('express')
const app = express()
const port = 3000
const config = {
    host:'mysql-db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.use(express.json()) // habilita o parsing de JSON no corpo da requisição

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const insert_people = `INSERT INTO people(name) values(?)`


app.listen(port, () => {
    console.log('Rodando na porta '+port)
})

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.post('/insert', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ error: 'Name is required' })
    }

    connection.query(insert_people, [name], (err, results) => {
        if (err) {
            console.error('Erro ao inserir:', err)
            return res.status(500).json({ error: 'Erro ao inserir no banco' })
        }

        res.status(201).json({ message: 'Pessoa inserida com sucesso!', id: results.insertId })
    })
})

app.get('/people', (req, res) => {
    connection.query('SELECT name FROM people', (err, results) => {
        if (err) {
            return res.status(500).send('<h1>Erro ao buscar nomes</h1>')
        }

        const nomes = results.map(p => `<li>${p.name}</li>`).join('')
        res.send(`<h1>Full Cycle Rocks!</h1><ul>${nomes}</ul>`)
    })
})