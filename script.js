const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '462a4a8d0fmsh4a876be0152adfdp1cd365jsnd4340bcc823a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData(city) {
  try {
	cityName.innerHTML=city;
    const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options);
    const result = await response.json();
    //console.log(response);
    console.log(result);
	
  //cloud_pct.innerHTML=result.cloud_pct
  temp.innerHTML=result.temp
  temp2.innerHTML=result.temp
  feels_like.innerHTML=result.feels_like
  humidity.innerHTML=result.humidity
  humidity2.innerHTML=result.humidity
  min_temp.innerHTML=result.min_temp
  max_temp.innerHTML=result.max_temp
  wind_speed.innerHTML=result.wind_speed
  wind_speed2.innerHTML=result.wind_speed
  wind_degrees.innerHTML=result.wind_degrees
  sunrise.innerHTML=result.sunrise
  sunset.innerHTML=result.sunset
  } catch (error) {
    console.error(error);
  }
}

window.onload = function() {
      fetchData("Mumbai");
};

document.addEventListener("DOMContentLoaded", ()=> {
  const submit = document.getElementById("submit");
  const city = document.getElementById("city");

  submit.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent form submission

    console.log(city.value);
    fetchData(city.value);
  });
});


//fetchData("Delhi");