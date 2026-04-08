// primeiro é feito a model, depois controller, depois index e por fim testes no insomnia
import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Usuario = banco.define(
  // nome da tabela no postgres exatamente como esta
  "usuario",
  {
    // Model attributes are defined here
    // colunas que estao no postgres
    idusuario: {
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
      allowNull: false,
      // allowNull defaults to true
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    perfil: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  },
);

export default Usuario;
