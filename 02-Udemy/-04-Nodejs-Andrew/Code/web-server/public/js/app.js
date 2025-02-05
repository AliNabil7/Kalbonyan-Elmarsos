const weatherForm = document.querySelector("form");
const searchEl = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = searchEl.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        return (messageOne.textContent = data.error);
      }

      messageOne.textContent = `Location: ${data.location}`;
      messageTwo.textContent = `Forecast: ${data.forecast}`;
    });
  });
});
