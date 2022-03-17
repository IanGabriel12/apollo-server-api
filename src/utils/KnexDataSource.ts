import { SQLDataSource } from "datasource-sql";
const config = require("../../knexfile");

export default class KnexDataSource extends SQLDataSource {
  constructor() {
    super(config);
  }
}
