const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extends: false }));

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_system_pj",
});

conexao.connect(function (erro) {
  if (erro) {
    throw erro;
  }
  console.log("conectado com sucesso");
});

app.get("/get", function (req, res) {
  let sql = "SELECT * FROM cliente";

  conexao.query(sql, (erro, retorno) => {
    if (erro) throw erro;
    //res.send(console.log(retorno));
    res.json(retorno);
  });
});

app.listen(8181);
