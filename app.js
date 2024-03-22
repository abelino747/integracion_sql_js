const express = require('express');
const mysql = require('mysql');
const app = express();

// Configura las credenciales de tu base de datos sakila
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'sakila'
});

// Intenta conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ', error);
  } else {
    console.log('Conexión exitosa a la base de datos sakila.');
  }
});


// Configura el motor de plantillas (EJS)
app.set('view engine', 'ejs');


// Ruta principal que muestra los primeros 10 películas
app.get('/', (req, res) => {
    const query = 'SELECT * FROM film LIMIT 10';
  
    connection.query(query, (error, results, fields) => {
      if (error) throw error;
      res.render('index', { films: results });
    });
  });

// Inicia el servidor web en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000.');
});