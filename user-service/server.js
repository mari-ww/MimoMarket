const axios = require('axios');  // Para fazer requisições HTTP
const express = require('express');
const app = express();
const port = 5000;

let usuarios = [];  // Lista de usuários temporária

app.use(express.json());

// Endpoint para cadastrar usuário
app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.status(201).send(usuario);
});

// Endpoint para listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Endpoint para obter todos os produtos via microserviço de Produtos
app.get('/produtos', async (req, res) => {
  try {
    const response = await axios.get('http://product-service:6000/produtos');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao comunicar com o microserviço de Produtos');
  }
});

// Endpoint de exemplo
app.get('/', (req, res) => {
  res.send('Usuários - Microserviço');
});

app.listen(port, () => {
  console.log(`Serviço de Usuários rodando na porta ${port}`);
});
