
if (typeof (require) !== "undefined") {


    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: "javascript"


    });

    con.connect(function (err) {
        if (err) {
            throw err;
        }
        console.log("Connected Succesfully!!!");

    });




    if (typeof (document) !== "undefined") {



        let id = document.getElementsById("id");
        let name = document.getElementsById("name");
        let mob = document.getElementsById("mob");
        let aadhar = document.getElementsById("aadhar");
        let pan = document.getElementsById("pan");
        let add1 = document.getElementsById("add1");
        let add2 = document.getElementsById("add2");
        let add3 = document.getElementsById("add3");
        let add4 = document.getElementsById("add4");
        let country = document.getElementsById("country");



        function add() {



            var sql = "INSERT INTO user VALUES(id, 'name', mob, aadhar, 'pan', 'add1', 'add2', 'add3', 'add4', 'country')";
            con.query(sql, function (err, result) {
                if (err) throw err;
                alert("DATA ADDED");

            });
        }
    }

};
