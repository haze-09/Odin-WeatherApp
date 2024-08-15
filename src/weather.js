import domBuilder from "./domBuilder";

let loading = document.querySelector('#loading');

async function forecast(location) {
  loading.showModal();
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next5days?unitGroup=metric&key=D6FJHHE29KMGZ47KUBVCVUJ9J&contentType=json`
    );
    if(!response.ok){
      domBuilder.error();
      throw new Error(`Place: ${location} not found`);
            
    }
    let weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(err.message);
  }finally{
    loading.close();
  }
}

export default forecast;
