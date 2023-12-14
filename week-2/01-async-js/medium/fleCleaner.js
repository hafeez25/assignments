const fs = require("fs");
// 1 - read file
let str = "";
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  str = data;
  str = str.replace(/\s+/g, " ").trim();

  fs.writeFile("a.txt", str, "utf-8", (err) => {
    if (err) {
      console.log(err);
      throw new Error();
    }
    console.log("text file has been updated");
  });

  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
});
