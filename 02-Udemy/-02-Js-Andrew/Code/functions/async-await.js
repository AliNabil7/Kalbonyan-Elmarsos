const getDataPromised = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 2000);
  });

const processData = async () => {
  let data = await getDataPromised(2);
  data = await getDataPromised(data);
  data = await getDataPromised(data);
  return data;
};

processData()
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
