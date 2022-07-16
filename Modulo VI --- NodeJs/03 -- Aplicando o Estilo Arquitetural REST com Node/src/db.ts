import { Pool } from "pg";

const connectionString = 'postgres://ncovfkyg:eWg62B-TH7jx6yeSR8jWVwBVYmAHOQtR@kesavan.db.elephantsql.com/ncovfkyg';
const db = new Pool({connectionString})

export default db;