import { Sequelize } from "sequelize";

const banco = new Sequelize("banco1", "postgres", "postgrespw", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

export default banco;
