async function forecast(location) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next5days?unitGroup=metric&key=D6FJHHE29KMGZ47KUBVCVUJ9J&contentType=json`
    );
    let weatherData = await response.json();
    console.log(weatherData);
  } catch (err) {
    console.error('place not found',err);
    // console.log('place not found');
  }
}

export default forecast;
