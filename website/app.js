const apiKey = "af69be529eeee203c8d68060cf7689b5&units=imperial";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const zipapiUrl = "http://api.openweathermap.org/geo/1.0/zip";

document.getElementById("generate").addEventListener("click", async () => {
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;

  try {
    const response = await fetch(
      `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const data = await response.json();

    const date = new Date();
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const name = data.name;
    const timezone = data.timezone;

    document.getElementById("name").innerHTML = `Name: ${name}`;
    document.getElementById("timezone").innerHTML = `Timezone: ${timezone}`;
    document.getElementById(
      "date"
    ).innerHTML = `Date: ${date.toLocaleDateString()}`;
    document.getElementById("temp").innerHTML = `Temperature: ${temperature}°`;
    document.getElementById(
      "content"
    ).innerHTML = `Weather: ${weatherDescription}`;
  } catch (error) {
    console.error(error);
  }
});

//city name

document.getElementById("generate").addEventListener("click", async () => {
  const city = document.getElementById("city").value;

  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    const date = new Date();
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const name = data.name;
    const timezone = data.timezone;

    document.getElementById("name").innerHTML = `name: ${name}`;
    document.getElementById("timezone").innerHTML = `timezone: ${timezone}`;
    document.getElementById(
      "date"
    ).innerHTML = `Date: ${date.toLocaleDateString()}`;
    document.getElementById("temp").innerHTML = `Temperature: ${temperature}°C`;
    document.getElementById(
      "content"
    ).innerHTML = `Weather: ${weatherDescription}`;
  } catch (error) {
    console.error(error);
  }
});
//zip code

document.getElementById("generate").addEventListener("click", async () => {
  const zip = document.getElementById("zip").value;

  try {
    const response = await fetch(`${zipapiUrl}?zip=${zip}&appid=${apiKey}`);
    const data = await response.json();

    const name = data.name;
    const country = data.country;
    const latitude = data.lat;
    const longitude = data.lon;

    document.getElementById("name").innerHTML = `name: ${name}`;
    document.getElementById("country").innerHTML = `country: ${country}`;
    document.getElementById("lat").innerHTML = `latitude: ${latitude}`;
    document.getElementById("lon").innerHTML = `longitude: ${longitude}`;
  } catch (error) {
    console.error(error);
  }
});
