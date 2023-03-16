const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'baltimore',
    database: "Registration"
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to Registration');
});

app.use(express.json());

//  Register endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const sql = 'INSERT INTO users SET ?';
    const user = { username, password };
    db.query(sql, user, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('User registerd');
    });
});

// Login endpoint 
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            res.send('User not found');
        } else {
            const user = result[0];
            if (user.password === password) {
                res.send('Login successful');
            } else {
                res.send('Incorrect password');
            }
        }
    });    
});

app.listen(5000, () => {
    console.log('Server running on port 5000 ');
});