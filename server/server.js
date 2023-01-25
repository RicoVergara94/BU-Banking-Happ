const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { urlencoded } = require("express");

const app = express();

// const corsOption = {
//     origin: ['http://localhost:3000'],
// };
// app.use(cors(corsOption));
// //if you want in every domain then
app.use(cors());
app.use(bodyParser.json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hellloooooo");
});
app.post("/", (req, res) => {
  // res.json(JSON.parse(req.body));
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// //const dotenv = require('dotenv');
// const http = require('http');
// const express = require('express');
// const app = express();

// app.use(express.json());
// //dotenv.config({ path: './config.env' });

// const server = http.createServer(app);
// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
