function myPromiseAll(promises) {
  return new Promise(async (resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Promises must be an array"));
    }

    const results = [];
    let completedPromises = 0;

    const handleResolve = (index, value) => {
      results[index] = value;
      completedPromises++;

      if (completedPromises === promises.length) {
        resolve(results);
      }
    };

    const handleReject = (reason) => {
      reject(reason);
    };

    for (let [index, promise] of promises.entries()) {
      /* // promises are processed one by one, potentially leading to longer overall execution times.
      try {
        const value = await Promise.resolve(promise);
        handleResolve(index, value);
      } catch (reason) {
        handleReject(reason);
        return;
      }
      */

      // Promotes parallel execution, allowing promises to start settling concurrently.
      // reject immediately, once any of the promise rejected
      Promise.resolve(promise)
        .then((value) => {
          handleResolve(index, value);
        })
        .catch((reason) => {
          handleReject(reason);
        });
    }
  });
}

module.exports = myPromiseAll;
