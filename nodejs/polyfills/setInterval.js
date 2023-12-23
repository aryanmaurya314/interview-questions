function mySetInterval(callback, interval) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  if (typeof interval !== "number") {
    throw new TypeError("Interval must be a number");
  }

  let intervalId;

  const executeInterval = () => {
    callback();
    intervalId = setTimeout(executeInterval, interval);
  };

  intervalId = setTimeout(executeInterval, interval);

  return {
    clearInterval: function () {
      clearTimeout(intervalId);
    },
  };
}

module.exports = mySetInterval;
