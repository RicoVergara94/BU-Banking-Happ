import fetch from "node-fetch";

fetch("http://localhost:3000")
  .then((res) => res.text())
  .then((data) => console.log(data));
