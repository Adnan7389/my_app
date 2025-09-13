const pool = require("./pool");

async function test() {
  try {
    const { rows } = await pool.query("SELECT NOW()");
    console.log("Connected! Time:", rows[0].now);
  } catch (err) {
    console.error("Error connecting:", err);
  } finally {
    pool.end();
  }
}

test();
