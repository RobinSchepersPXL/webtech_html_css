const mysql = require('mysql');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
    host: 'your_database_host',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/data', (req, res) => {
    const query = 'SELECT * FROM your_table_name';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query: ', err);
            res.sendStatus(500);
            return;
        }

        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});