import express from 'express'
import cors from 'cors'
import itensRouter from './routers/itens-router'

// Porta do Servidor
const PORT = process.env.PORT || 3000

// Host do Servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express();

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Endpoint Raiz
app.get('/', (req, res) => {
    res.send('Bem-Vindo')
});

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Rotas
app.use('/api', itensRouter)

// Resposta padrão para quaisquer outras requisições
app.use((req, res) => {
    res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})