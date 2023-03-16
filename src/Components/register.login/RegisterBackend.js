import express from 'express';
import mysql from 'mysql2';
import cors from "cors";
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'baltimore',
    database: "Client_Server"
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to Registration');
});

app.use(express.json());
app.use(cors());

app.get('/register', (req, res) => {
    const q = "SELECT * FROM Client_Server.Registration";
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

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

app.post('/register', (req, res) => {
    const q = "INSERT INTO Client_Server.Registration (`user_name`, `password`, `email`) VALUES (?)"
    const values = [
        req.body.user_name,
        req.body.password,
        req.body.email,
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("New User inputted!")
    })
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

const PORT = 5000;

app.listen(
    PORT, 
    () => console.log(`Running on ${PORT}`)
);