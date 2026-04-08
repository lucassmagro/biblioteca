import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Aluno = banco.define(
  // nome da tabela no postgres exatamente como esta
  "aluno",
  {
    // Model attributes are defined here
    // colunas que estao no postgres
    matricula: {
      type: DataTypes.BIGINT, //bigserial
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
);

export default Aluno;
