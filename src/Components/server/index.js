import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "baltimore",
    database: "Client_Server"
})

app.use(express.json())
app.use(cors())


app.post("/list", (req, res) => {
    const q = "INSERT INTO Client_Server.clientInformation (`clientName`, `SOW`, `grant`) VALUES (?)"
    const values = [
        req.body.clientName,
        req.body.SOW,
        req.body.grant,
    ]

    db.query(q,[values], (err, data) => {
        if(err) return res.json(err)
        return res.json("shit has been updated")
    })
});



app.get('/list', (req, res) => {
    const q = "SELECT * FROM Client_Server.clientInformation";
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.delete("/list/:id", (req, res) => {
    const infoId = req.params.id;
    const q = "DELETE FROM Client_Server.clientInformation WHERE id = ?"
    
    db.query(q, [infoId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Info has been successfully deleted");
    })
});

app.put("/list/:id", (req, res) => {
    const infoId = req.params.id;
    const q = "UPDATE Client_Server.clientInformation SET `clientName` = ?, `SOW` = ?, `grant` = ? WHERE id = ?"
    
    const values = [
        req.body.clientName,
        req.body.SOW,
        req.body.grant,
    ]
    db.query(q, [...values, infoId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Info has been successfully updated");
    })
});

const PORT = 8000;

app.listen(
    PORT, 
    () => console.log(`Running on ${PORT}`)
);