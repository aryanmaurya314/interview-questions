// guess output
const obj = {
  a: this,
  b: function () {
    return this;
  },
  c: () => this,
};

console.log("a: ", obj.a); // {}
console.log("b: ", obj.b()); // obj
console.log("c: ", obj.c()); // {}
