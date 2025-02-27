require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// API untuk menyimpan reservasi ke database
app.post("/api/reservations", (req, res) => {
  const { firstName, lastName, email, phone, checkIn, checkOut, guests, specialRequests, roomId } = req.body;

  const sql = `INSERT INTO reservations (first_name, last_name, email, phone, check_in, check_out, guests, special_requests, room_id)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [firstName, lastName, email, phone, checkIn, checkOut, guests, specialRequests, roomId], (err, result) => {
    if (err) {
      console.error("Error inserting reservation:", err);
      res.status(500).json({ error: "Failed to insert reservation" });
    } else {
      res.status(201).json({ message: "Reservation saved successfully", id: result.insertId });
    }
  });
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
