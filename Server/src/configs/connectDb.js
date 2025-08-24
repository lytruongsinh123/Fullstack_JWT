import mysql from "mysql2";

// Create the connection to database
async function connectDB() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "jwt",
    });
    return connection;
}

module.exports = connectDB;
