import { parseISO, format } from 'date-fns';

const domBuilder = (function () {
  let data;

  let title = document.querySelector("#title");
  let address = document.querySelector("#address");
  let desc = document.querySelector("#desc");

  let temperature = document.querySelector(".temp>div>p");
  let high = document.querySelector("#high");
  let low = document.querySelector("#low");

  let forecastContainer = document.querySelector("#forecast");

  function forecastDom(days) {
    days.forEach((eachDay) => {
      let forecastDiv = document.createElement("div");

      let forecastTempCont = document.createElement("div");
      forecastTempCont.classList.add("forecastDiv");
      forecastTempCont.classList.add("shadow");
      forecastDiv.appendChild(forecastTempCont);

      let day = document.createElement("p");
      let date = parseISO(eachDay.datetime);
      day.textContent = format(date, 'EEEE');
      forecastDiv.appendChild(day);

      let forecastTemperature = document.createElement("p");
      forecastTemperature.textContent = parseInt(eachDay.temp) + "°C";
      forecastTempCont.appendChild(forecastTemperature);

      forecastContainer.appendChild(forecastDiv);
    });
  }

  const build = () => {
    title.textContent = data.address;
    address.textContent = data.resolvedAddress;
    desc.textContent = data.description;

    temperature.textContent = parseInt(data.currentConditions.temp) + "°C";
    high.textContent = "H: " + parseInt(data.days[0].tempmax) + "°";
    low.textContent = "L: " + parseInt(data.days[0].tempmin) + "°";
    
    forecastContainer.innerHTML='';
    forecastDom(data.days.slice(1));
  };

  return {
    set data(newData) {
      data = newData;
    },
    get data() {
      return data;
    },
    build,
  };
})();

export default domBuilder;
