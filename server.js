const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Newyork69$',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// test Hello World to see if this works!
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello Dickhead'
//     });
//   });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// will start Express.js server on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });