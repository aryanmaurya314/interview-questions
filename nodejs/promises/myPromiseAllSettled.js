function myPromiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Promises must be an array"));
    }

    const results = [];
    let completedPromises = 0;

    const handlePromise = (index, value, status) => {
      results[index] = { status, value };
      completedPromises++;

      if (completedPromises === promises.length) {
        resolve(results);
      }
    };

    for (let [index, promise] of promises.entries()) {
      Promise.resolve(promise)
        .then((result) => {
          handlePromise(index, result, "fulfilled");
        })
        .catch((reason) => {
          handlePromise(index, reason, "rejected");
        });
    }
  });
}

module.exports = myPromiseAllSettled;
