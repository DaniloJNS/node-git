const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const content = data.toString();
  const lines = content.split("\n").length - 1;
  print(lines);
});

const print = (data) => {
  console.log(data);
};
