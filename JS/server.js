const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'perritoPanzon',
  password: '12345',
  port: 5432,
});

app.use(express.static(__dirname));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = {
        text: 'SELECT * FROM usuarios WHERE nombre = $1 AND clave = $2',
        values: [username, password],
    };

    pool.query(query, (err, result) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.json({ redirect: null });
        } else if (result.rows.length > 0) {
            res.json({ redirect: `/${username}.html` });
        } else {
            res.json({ redirect: null });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
