const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=45829b028d58ea5dae042d52cd7a0c13&query=45,-75";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
