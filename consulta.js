const connection = require('./app');

// Consulta de ejemplo para obtener los primeros 10 clientes
const query = 'SELECT * FROM actor LIMIT 10';

connection.query(query, (error, results, fields) => {
  if (error) throw error;
  console.log('Resultados de la consulta:', results);
});

// Cierra la conexión después de realizar la consulta
connection.end();
