const myPromiseAll = require("./myPromiseAll");
const myPromiseAllSettled = require("./myPromiseAllSettled");

const getData = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      return reject(new Error("Data not found!"));
    }
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
};

const promise1 = getData({ message: "Data 1 fetched successfully." });
const promise2 = getData(null);
const promise3 = getData({ message: "Data 3 fetched successfully." });
const promise4 = getData({ message: "Data 4 fetched successfully." });

const promises = [promise1, promise2, promise3, promise4];

// original Promise.all
/* UNCOMMENT TO COMPARE
Promise.all(promises)
  .then(([result1, result2, result3, result4]) => {
    console.log({ result1, result2, result3, result4 });
  })
  .catch((err) => {
    console.log(err);
  });
*/

// custom Promise.all
myPromiseAll(promises)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

// original Promise.allSettled
/* UNCOMMENT TO COMPARE
Promise.allSettled(promises)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// custom Promise.allSettled
myPromiseAllSettled(promises)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
