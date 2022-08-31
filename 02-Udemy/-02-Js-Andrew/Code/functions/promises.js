// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("Number must be provided");
    }
  }, 2000);
};

getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});

// Promise
const getDataPromised = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 2000);
  });

getDataPromised(2).then(
  (data) => {
    getDataPromised(data).then(
      (data) => {
        console.log(`Promised data: ${data}`);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

getDataPromised(10)
  .then((data) => {
    return getDataPromised(data);
  })
  .then((data) => {
    return "this is some test data";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
