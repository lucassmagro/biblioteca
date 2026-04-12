// Importa a configuracao de conexao com o banco criado
import banco from "../Banco.js";
// Importa os tipos de dados do sequelize para mapear igual ao postgresql
import { DataTypes } from "sequelize";

// Define a estrutura da tabela para o node entender
const Exemplar = banco.define(
  // nome da tabela no postgres exatamente como esta
  "exemplar",
  {
    idexemplar: {
      type: DataTypes.BIGINT, // bigserial
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idobra: {
      type: DataTypes.BIGINT, // FK ligando com a tabela Obra
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // se nao enviar o status no insomnia eele salva como 0
    },
  },
  {
    // Other model options go here
  },
);

export default Exemplar;
