async function forecast(location) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next5days?unitGroup=metric&key=D6FJHHE29KMGZ47KUBVCVUJ9J&contentType=json`
    );
    if(!response.ok){
      throw new Error(`Place: ${location} not found`);      
    }
    let weatherData = await response.json();
    console.log(weatherData);
  } catch (err) {
    console.error(err.message);
  }
}

export default forecast;
