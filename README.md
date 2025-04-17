# 🛍️ MimoMarket

**MimoMarket** é um projeto de e-commerce sustentável de produtos artesanais, construído com arquitetura de microsserviços. Os serviços principais são o `user-service` (usuários) e `product-service` (produtos), com comunicação via **REST** e **gRPC**, utilizando **Docker** para orquestração.

---

## 📌 Objetivo

Demonstrar o conhecimento em arquitetura distribuída, containers, e comunicação entre microsserviços (REST e gRPC), conforme os requisitos das Unidades I.2, I.3 e II.7.

---

## 🧱 Tecnologias Utilizadas

- Node.js (Express)
- gRPC
- Docker & Docker Compose
- PostgreSQL
- REST API
- Comunicação entre serviços com gRPC
- Arquitetura baseada em microsserviços

---

## 🗂️ Estrutura do Projeto

```bash
mimomarket/
├── user-service/       # Microsserviço de usuários (porta 5000)
├── product-service/    # Microsserviço de produtos (porta 5001)
├── docker-compose.yml  # Orquestração com Docker
└── README.md           # Documentação
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Docker instalado ([Download Docker](https://www.docker.com/products/docker-desktop/))

### Passos

1. Clone o repositório:

```bash
git clone [https://github.com/seu-usuario/mimomarket.git](https://github.com/seu-usuario/mimomarket.git)
cd mimomarket
```

2. Execute os containers com Docker Compose:
```bash
docker-compose up --build
```
Os serviços estarão disponíveis em:

Usuários: http://localhost:5000

Produtos: http://localhost:5001

## 🔗 Endpoints REST

### User Service (localhost:5000)

| Método | Rota        | Descrição             |
|--------|-------------|-----------------------|
| POST   | `/usuarios` | Cadastra um usuário   |
| GET    | `/usuarios` | Lista os usuários     |
|        |             | **[Exportar para Sheets]** |

### Product Service (localhost:5001)

| Método | Rota        | Descrição        |
|--------|-------------|-------------------|
| GET    | `/produtos` | Lista produtos    |
|        |             | **[Exportar para Sheets]** |

## 🧪 Testando com Postman

Você pode testar os serviços com o Postman.

**Exemplo de requisição POST para criar usuário:**

```bash
POST http://localhost:5000/usuarios
Content-Type: application/json

{
  "id": 1,
  "nome": "Maria Artesã"
}

## ✅ Funcionalidades Demonstradas

* Definição de requisitos funcionais e não funcionais
* Arquitetura distribuída com microsserviços
* Containerização com Docker
* Comunicação entre serviços com REST e gRPC

## 👤 Autoria

Projeto desenvolvido por [Seu Nome] como parte da disciplina de Desenvolvimento de Sistemas Distribuídos.
