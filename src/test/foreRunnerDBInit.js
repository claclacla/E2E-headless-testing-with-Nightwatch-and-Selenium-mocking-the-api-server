import ForeRunnerDB from 'forerunnerdb'

let fdb = new ForeRunnerDB();
let db = fdb.db("e2e-test");
db.persist.driver("LocalStorage");

export default db;