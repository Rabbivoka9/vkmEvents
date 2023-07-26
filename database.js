import { Sequelize } from "sequelize";
const db = new Sequelize("events", "postgres", "mamita", {host:"localhost", dialect:"postgres"})
export default db
