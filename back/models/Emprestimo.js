import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Emprestimo = banco.define("emprestimo", {
  idemprestimo: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  idexemplar: {
    type: DataTypes.BIGINT, // FK ligando com o Exemplar
    allowNull: false,
  },
  idusuario: {
    type: DataTypes.BIGINT, // FK ligando o usuario que pegou o livro
    allowNull: false,
  },
  emprestimo: {
    type: DataTypes.DATEONLY, // DATEONLY ignora a hora, pega só a data (Ano-Mês-Dia)
    allowNull: false,
    defaultValue: DataTypes.NOW, // 'default current_date': Pega a data de hoje sozinho
  },
  vencimento: {
    type: DataTypes.DATEONLY, // Data que o aluno precisa devolver
    allowNull: false,
  },
  devolucao: {
    type: DataTypes.DATEONLY,
    allowNull: true, // Começa nulo (vazio) porque o livro ainda não foi devolvido
  },
});

export default Emprestimo;
