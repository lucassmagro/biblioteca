// configuracao do banco de dados
import { Sequelize } from "sequelize";

const banco = new Sequelize("banco1", "postgres", "postgres", {
  host: "localhost",
  port: 5432, // porta padrao
  dialect: "postgres",
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

export default banco; // a variavel banco é exportada para fora do arquivo
