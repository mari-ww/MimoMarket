const express = require('express');
const app = express();
const port = 6000;

let produtos = [];  // Lista de produtos temporária

app.use(express.json());

// Endpoint para cadastrar produto
app.post('/produtos', (req, res) => {
  const produto = req.body;
  produtos.push(produto);
  res.status(201).send(produto);
});

// Endpoint para listar todos os produtos
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// Endpoint de exemplo
app.get('/', (req, res) => {
  res.send('Produtos - Microserviço');
});

app.listen(port, () => {
  console.log(`Serviço de Produtos rodando na porta ${port}`);
});
