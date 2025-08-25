import bcrypt from "bcryptjs";
import mysql from "mysql2";
// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
});
const salt = bcrypt.genSaltSync(10);
const handleHashPassword = (userpassword) => {
    let hashPassword = bcrypt.hashSync(userpassword, salt);
    return hashPassword;
};

const creatNewUser = (data) => {
    let hashPassword = handleHashPassword(data.password);
    let email = data.email;
    let username = data.username;
    connection.query(
        `INSERT INTO users (email, password, username) VALUES(?,?,?)`,
        [email, hashPassword, username],
        function (err, results, fields) {
            console.log(results);
        }
    );
};

const getUserList = () => {
    let users = [];
    connection.query(
        `SELECT * from users`,
        function (err, results, fields) {
            console.log(results)
            users = results;
        }
    );
    return users;
};
module.exports = {
    creatNewUser,
    getUserList,
};
