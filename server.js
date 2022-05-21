const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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