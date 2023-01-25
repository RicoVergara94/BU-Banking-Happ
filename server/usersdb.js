let sqlite3 = require("sqlite3");

let db;
new sqlite3.Database("/users.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err && err.code == "SQLITE_CANTOPEN") {
    createDatabase();
    return;
  } else if (err) {
    console.log("Getting error " + err);
    exit(1);
  }
  console.log("we're going to do the query");
  runQueries(db);
});

const createDatabase = () => {
  let newdb = new sqlite3.Database("users.db", (err) => {
    if (err) {
      console.log("Getting error " + err);
      exit(1);
    }
    createTables(newdb);
  });
};
// created_at timestamp default current_timestamp
const createTables = (newdb) => {
  newdb.exec(
    `
    create table users (
        id int primary key not null,
        username text not null unique,
        password text not null,
        salt text not null
    );

    insert into users (id, username, password, salt)
    values (1, 'oscar.vergara1994@gmail.com', 'Hello123', 'this_is_salt_one'),
           (2, 'ricardo.vergara1994@gmail.com', 'password123', 'this_is_salt_two'),
           (3, 'rico.vergara1994@gmail.com', 'gandalfthegrey', 'this_is_salt_three');
        `,
    () => {
      runQueries(newdb);
    }
  );
};

const runQueries = (db) => {
  db.all(`select * from users`, (err, rows) => {
    if (err) {
      console.log("error");
    } else {
      rows.forEach((row) => {
        console.log("here");
        console.log(row);
      });
    }
  });
};
