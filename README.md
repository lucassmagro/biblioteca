# Biblioteca

Sistema de gerenciamento de biblioteca desenvolvido como projeto acadêmico para a disciplina de Programacao I, no curso de Sistemas de Informacao.

## Tecnologias utilizadas

- Node.js
- Express 5
- PostgreSQL
- Sequelize ORM

## Estrutura do projeto

```
biblioteca/
└── back/
    ├── controllers/
    │   ├── AlunoController.js
    │   └── UsuarioController.js
    ├── models/
    │   ├── Aluno.js
    │   ├── Obra.js
    │   └── Usuario.js
    ├── Banco.js
    ├── index.js
    └── package.json
```

## Como executar

### Pre-requisitos

- Node.js instalado
- PostgreSQL instalado e em execucao

### Instalacao

1. Clone o repositorio:

```bash
git clone https://github.com/lucassmagro/biblioteca.git
```

2. Acesse a pasta do projeto:

```bash
cd biblioteca/back
```

3. Instale as dependencias:

```bash
npm install
```

4. Configure as variaveis de ambiente criando um arquivo `.env` na raiz com as credenciais do banco de dados.

5. Execute o servidor:

```bash
node index.js
```

## Rotas disponiveis

### Aluno

| Metodo | Rota | Descricao |
|--------|------|-----------|
| GET | /aluno | Lista todos os alunos |
| GET | /aluno/:matricula | Busca aluno por matricula |
| POST | /aluno | Cadastra novo aluno |
| PUT | /aluno/:matricula | Atualiza dados do aluno |
| DELETE | /aluno/:matricula | Remove aluno |

### Usuario

| Metodo | Rota | Descricao |
|--------|------|-----------|
| GET | /usuario | Lista todos os usuarios |
| GET | /usuario/:idusuario | Busca usuario por ID |
| POST | /usuario | Cadastra novo usuario |
| PUT | /usuario/:idusuario | Atualiza dados do usuario |
| DELETE | /usuario/:idusuario | Remove usuario |

## Autor

Lucas Magro
