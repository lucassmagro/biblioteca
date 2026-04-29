# Biblioteca

Sistema de gerenciamento de biblioteca desenvolvido como projeto acadêmico para a disciplina de Programação I, no curso de Sistemas de Informação. Este projeto é composto por uma API backend (`back`) e uma interface web frontend (`front`).

## 🛠️ Tecnologias utilizadas

### Backend
- **Node.js**
- **Express** 5
- **PostgreSQL**
- **Sequelize** ORM

### Frontend
- **React**
- **React Router DOM**
- **React Scripts**

## 📂 Estrutura do projeto

```text
biblioteca/
├── back/               # API (Backend)
│   ├── controllers/    # Controladores da API
│   ├── models/         # Modelos do Sequelize (Banco de Dados)
│   ├── Banco.js        # Configuração de conexão
│   └── index.js        # Arquivo principal do servidor
└── front/              # Interface Web (Frontend)
    ├── public/         # Arquivos estáticos
    └── src/            # Código-fonte React
        ├── componentes/# Componentes da interface
        └── App.js      # Componente raiz
```

## 🚀 Como executar

### Pré-requisitos
- **Node.js** e **npm** instalados
- **PostgreSQL** instalado e em execução

### 1. Backend (API)

Acesse a pasta do backend, instale as dependências e inicie o servidor:

```bash
cd back
npm install
# Configure o arquivo .env na raiz do back (se houver) com as credenciais do banco
node index.js
```
O servidor estará rodando (verifique a porta no console).

### 2. Frontend (Interface Web)

Em um novo terminal, acesse a pasta do frontend, instale as dependências e inicie a aplicação:

```bash
cd front
npm install
npm start
```
A aplicação abrirá no seu navegador (geralmente em `http://localhost:3000`).

## 🔗 Rotas da API (Backend)

### 🎓 Aluno
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/aluno` | Lista todos os alunos |
| GET | `/aluno/:matricula` | Busca aluno por matrícula |
| POST | `/aluno` | Cadastra novo aluno |
| PUT | `/aluno/:matricula` | Atualiza dados do aluno |
| DELETE | `/aluno/:matricula` | Remove aluno |

### 👤 Usuário
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/usuario` | Lista todos os usuários |
| GET | `/usuario/:idusuario` | Busca usuário por ID |
| POST | `/usuario` | Cadastra novo usuário |
| PUT | `/usuario/:idusuario` | Atualiza dados do usuário |
| DELETE | `/usuario/:idusuario` | Remove usuário |

## ✍️ Autor

**Lucas Magro**
