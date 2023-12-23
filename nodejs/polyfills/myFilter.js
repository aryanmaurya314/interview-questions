function myFilter(callback) {
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
}

module.exports = myFilter;
