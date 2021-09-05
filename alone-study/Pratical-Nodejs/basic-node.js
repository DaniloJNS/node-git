const f = () => {
  console.log("Boo");
};
f.boo = [0, 2, 3];
f.doo = 2;
f();
console.log(f.boo);
console.log([f', f]);
