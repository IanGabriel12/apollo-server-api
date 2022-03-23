import { SQLDataSource } from "datasource-sql";
const config = require("../../knexfile")[process.env.NODE_ENV || "development"];

export default class KnexDataSource extends SQLDataSource {
  constructor() {
    super(config);
  }
}
