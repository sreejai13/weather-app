const apiKey = "4ef39c16cb13ffe6f0a61c12ddf9da70";


// Show current date immediately
const now = new Date();

document.getElementById("date").innerText =
now.toLocaleString();


// Main Weather Function
async function getWeather() {

  const city =
  document.getElementById("city").value;

  // Empty input check
  if(city === ""){

    alert("Please enter city name");

    return;
  }

  const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Loading
  document.getElementById("temp").innerText =
  "Loading...";

  try {

    const response =
    await fetch(url);

    const data =
    await response.json();

    // Invalid city
    if(data.cod == "404"){

      alert("City not found");

      return;
    }

    // Weather icon
    const iconCode =
    data.weather[0].icon;

    const iconUrl =
`https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("icon").src =
    iconUrl;

    // Weather type
    const weatherMain =
    data.weather[0].main;

    // Update UI
    document.getElementById("cityName").innerText =
    data.name;

    document.getElementById("temp").innerText =
    Math.round(data.main.temp) + "°C";

    document.getElementById("weather").innerText =
    data.weather[0].description;

    document.getElementById("humidity").innerText =
    data.main.humidity;

    document.getElementById("wind").innerText =
    data.wind.speed;

    // Update date & time
    const now = new Date();

    document.getElementById("date").innerText =
    now.toLocaleString();

    // Forecast
    getForecast(city);

    // Change background
    changeBackground(weatherMain);

  }

  catch(error){

    alert("Something went wrong");

    console.log(error);
  }
}


// Forecast Function
async function getForecast(city){

  const forecastUrl =
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try{

    const response =
    await fetch(forecastUrl);

    const data =
    await response.json();

    const forecastContainer =
    document.getElementById("forecast");
    forecastContainer.classList.remove("hidden");
    document.querySelector(".container").style.width =
"950px";
    // Clear old cards
    forecastContainer.innerHTML = "";

    // Loop through forecast
    for(let i = 0; i < data.list.length; i += 8){

      const item =
      data.list[i];

      const date =
      item.dt_txt.split(" ")[0];

      const temp =
      Math.round(item.main.temp);

      const icon =
      item.weather[0].icon;

      const weather =
      item.weather[0].main;

      const card = `

        <div class="forecast-card">

          <h3>${date}</h3>

          <img
src="https://openweathermap.org/img/wn/${icon}@2x.png">

          <p>${temp}°C</p>

          <p>${weather}</p>

        </div>
      `;

      forecastContainer.innerHTML +=
      card;
    }

  }

  catch(error){

    console.log(error);
  }
}


// Dynamic Background
function changeBackground(weather){

  const body = document.body;

  // Summer / Clear
  if(weather == "Clear"){

    body.style.background =
    "linear-gradient(135deg,#FFD200,#FF9F1C)";
  }

  // Rain
  else if(weather == "Rain"){

    body.style.background =
    "linear-gradient(135deg,#757F9A,#D7DDE8)";
  }

  // Clouds
  else if(weather == "Clouds"){

    body.style.background =
    "linear-gradient(135deg,#8e9eab,#eef2f3)";
  }

  // Thunderstorm
  else if(weather == "Thunderstorm"){

    body.style.background =
    "linear-gradient(135deg,#232526,#414345)";
  }

  // Winter / Snow
  else if(weather == "Snow"){

    body.style.background =
    "linear-gradient(135deg,#ffffff,#dfe9f3)";
  }

  // Mist / Fog
  else if(weather == "Mist"){

    body.style.background =
    "linear-gradient(135deg,#bdc3c7,#2c3e50)";
  }

  // Default
  else{

    body.style.background =
   "linear-gradient(135deg,#1e3c72,#2a5298)";
  }
}


// Enter Key Support
document
.getElementById("city")
.addEventListener("keypress", function(event){

  if(event.key === "Enter"){

    getWeather();
  }

});