import domBuilder from "./domBuilder";
import forecast from "./weather";

let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector(".material-symbols-outlined");

async function start() {
    try {
        let weatherData = await forecast(searchInput.value);
        domBuilder.data = weatherData;
        console.log(domBuilder.data);
        domBuilder.build();
      } catch (err) {
        console.error('Error in start function:', err.message);
        domBuilder.error();
      }
}

export default function attachlisteners() {
  searchInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      start();
    }
  });
  searchButton.addEventListener("click", async () => {
    start();
  });
}
