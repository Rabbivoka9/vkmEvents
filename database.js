import { Sequelize } from "sequelize";
const db = new Sequelize("Odi", "postgres", "mamita", {host:"localhost", dialect:"postgres"})
export default db
