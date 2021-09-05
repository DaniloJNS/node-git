const fs = require("fs");

const input = process.argv;
const path = input[2];
const ext = "." + input[3];

fs.readdir(path, (err, data) => {
  data.forEach((file) => {
    if (file.endsWith(ext)) {
      print(file);
    }
  });
});

const print = (data) => {
  console.log(data);
};
