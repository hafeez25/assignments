const fs = require("fs");

fs.writeFile(
  "message.txt",
  "This is data from nodejs file creation",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("file has been created");
  }
);
