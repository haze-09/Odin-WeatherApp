import "./style.css";
import forecast from "./weather";

let location='delhi';
forecast(location);

// try {
//     const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bengaluru/next7days?unitGroup=metric&key=D6FJHHE29KMGZ47KUBVCVUJ9J&contentType=json", { mode: 'cors' });
//     const weatherData = await response.json();
//     console.log(weatherData);
// } catch (err) {
//     console.error(err);
// }
  
  