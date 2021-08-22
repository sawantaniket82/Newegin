import { createConnection } from 'mysql';

var con = createConnection({
    host : "localhost",
    user: "root",
    password : "",
    port : 3306,
    database:"javascript"
    

});

con.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected Succesfully!!!");
    
});