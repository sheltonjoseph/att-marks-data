const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"Eagle2022",
    host:"localhost",
    port:7000,
    database:"classdata"
});
pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  

module.exports = pool;