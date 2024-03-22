const express = require("express");
const mysql = require("mysql");

const app = express();

// genera la conexion con la base de datos en mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "sakila",
});

// verifica la conexion con la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Ocurrio un erro,el cual es : ", err);
    return;
  }
  console.log("Conexión exitosa :)");
});

// trae la informacion de los actores de la base de datos sakila

app.get("/actores", (req, res) => {
  // el . query se alimenta de un string con la consulta en lenguaje de sql y un arrow function
  // con 2 parametro el primero error se muestra si falla algo ,  el segundo results que trae lo consultado
  connection.query("SELECT * FROM actor", (error, results) => {
    if (error) {
      console.error("Error al ejecutar la consulta:", error);
      res.status(500).send("Error al consultar la base de datos");
      return;
    }
    res.json(results);// Devolver datos como JSON
  });
});
// se escucha en el puerto 3000
app.listen(4000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
