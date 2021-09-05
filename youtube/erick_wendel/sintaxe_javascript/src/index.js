const EntityBase = require("./EntityBase");

console.log(
  new EntityBase({
    name: "danilo",
    gender: "male",
  })
);

console.log(
  new EntityBase({
    name: "Xuxa",
    gender: "female",
  }).name
);
