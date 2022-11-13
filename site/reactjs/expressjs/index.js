const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000

app.use(cors());
app.use(bodyParser.json());

const conn = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'ecommerce' });

conn.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

app.post('/contactus', (req, res) => {
    let data = { name: req.body.name, email: req.body.email, message: req.body.message };
    let sql = "INSERT INTO contactus (name,email,message,date/time) values(name,email,address,now())";
    let query = conn.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": result }));
    });
});

app.listen(3000, () => {
    console.log("server running succesfully on port 3000");
});
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })