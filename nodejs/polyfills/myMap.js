function myMap(callback) {
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new Error(callback + " is not a function");
  }

  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
}

module.exports = myMap;
