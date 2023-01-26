const e = require("express");

let sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./users.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});

// const createDatabase = () => {
//   let newdb = new sqlite3.Database("users.db", (err) => {
//     if (err) {
//       console.log("Getting error " + err);
//       exit(1);
//     }
//     createTables(newdb);
//   });
// };

const createTables = (newdb) => {
  newdb.exec(
    `
    create table users (
        id int primary key not null,
        username text not null,
        password text not null,
        salt text not null
    );
    insert into users (id, username, password, salt)
        values (1, 'oscar.vergara1994@gmail.com', 'Hello123', 'saltOne'),
               (2, 'ricardo.vergara1994@gmail.com', 'password123', 'saltTwo'),
               (3, 'rico.vergara1994@gmail.com', 'Hakuna', 'saltThree');

    `
  );
};

const runQueries = (db) => {
  db.all(
    `select username from users where username = 'oscar.vergara1994@gmail.com'`,
    (err, rows) => {
      rows.forEach((row) => {
        console.log(row);
      });
    }
  );
};
// createTables(db);
// runQueries(db);

if (runQueries(db)) {
  console.log("the value isn't null");
} else {
  console.log("value is null");
}
