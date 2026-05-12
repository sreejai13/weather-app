const apiKey = "4ef39c16cb13ffe6f0a61c12ddf9da70";

async function getWeather() {

  const city =
  document.getElementById("city").value;

  const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Loading text
  document.getElementById("temp").innerText =
  "Loading...";

  try {

    const response = await fetch(url);

    const data = await response.json();

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

    // Weather main
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

    // Date & time
    const now = new Date();

    document.getElementById("date").innerText =
    now.toLocaleString();

    // Change background
    changeBackground(weatherMain);

  }

  catch(error){

    alert("Something went wrong");

    console.log(error);
  }
}


// Dynamic background
function changeBackground(weather){

  const body = document.body;

  if(weather == "Clear"){

    body.style.background =
    "linear-gradient(135deg,#f6d365,#fda085)";
  }

  else if(weather == "Clouds"){

    body.style.background =
    "linear-gradient(135deg,#bdc3c7,#2c3e50)";
  }

  else if(weather == "Rain"){

    body.style.background =
    "linear-gradient(135deg,#4b79a1,#283e51)";
  }

  else if(weather == "Thunderstorm"){

    body.style.background =
    "linear-gradient(135deg,#232526,#414345)";
  }

  else{

    body.style.background =
    "linear-gradient(135deg,#74ebd5,#ACB6E5)";
  }
}


// Enter key support
document
.getElementById("city")
.addEventListener("keypress", function(event){

  if(event.key === "Enter"){

    getWeather();
  }

});


// Dark mode
function toggleMode(){

  document.body.classList.toggle("dark");
}
const now = new Date();

document.getElementById("date").innerText =
now.toLocaleString();