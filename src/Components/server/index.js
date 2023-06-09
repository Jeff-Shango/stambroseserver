import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Woodward20!",
    database: "Client_Server"
})

app.use(express.json())
app.use(cors())

app.post("/login", (req, res) => {
    const { user_name, password } = req.body;
    const q = "SELECT * FROM Client_Server.loginInformation WHERE user_name = ? AND password = ?";
    const values = [user_name, password];
  
    db.query(q, values, (err, data) => {
      if (err) {
        return res.json(err);
      }
  
      if (data.length > 0) {
        return res.json({ message: "Login successful" });
      } else {
        return res.json({ message: "Incorrect credentials" });
      }
    });
  });
  

// app.post("/login", (req, res) => {
//     const { user_name, password } = req.body;
//     const q = "SELECT * FROM Client_Server.loginInformation WHERE user_name = ? AND password = ?";
//     const values = [user_name, password];
  
//     db.query(q, values, (err, data) => {
//       if (err) {
//         return res.json(err);
//       }
  
//       if (data.length > 0) {
//         return res.json({ message: "Login successful" });
//       } else {
//         return res.json({ message: "Incorrect credentials" });
//       }
//     });
//   });
  

app.post("/list", (req, res) => {
    const q = "INSERT INTO Client_Server.clientInformation (`clientName`, `SOW`, `grant`) VALUES (?, ?, ?)"
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

app.post("/register", (req, res) => {
    const q = "INSERT INTO Client_Server.loginInformation (`user_name`, `password`, `email`) VALUES (?)"
    const values = [
        req.body.user_name,
        req.body.password,
        req.body.email,
    ]

    db.query(q,[values], (err, data) => {
        if(err) return res.json(err)
        return res.json("login info added")
    })
});



app.get('/list', (req, res) => {
    const q = "SELECT * FROM Client_Server.clientInformation";
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.get('/register', (req, res) => {
    const q = "SELECT * FROM Client_Server.loginInformation";
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

const clientPORT = 8000;
const loginPORT = 5000;

app.listen(
    clientPORT, 
    () => console.log(`Running on ${clientPORT}`)
);

app.listen(
    loginPORT,
    () => console.log(`Login server running on ${loginPORT}`)
);