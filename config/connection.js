var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'root',
        database:'burgers_db'
    });
};

// = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'burgers_db',
//     port:process.env.PORT || '8889'
// })

// connection.connect(function(err){
//     if(err)throw err;
//     console.log("connected as id: " + connection.threadId); 
// });
connection.connect();

module.exports = connection;