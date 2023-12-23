function curryingSum(initialValue) {
  let total = initialValue;

  const curried = (value) => {
    if (value === undefined) {
      return total;
    }
    // add value to total
    total += value;
    // return callback function to accept next argument
    return curried;
  };

  // if initialValue is undefined then return 0 instead of returning curried function
  return initialValue === undefined ? 0 : curried;
}

const total = curryingSum(1)(2)(3)(4)(5)();

console.log(total);
