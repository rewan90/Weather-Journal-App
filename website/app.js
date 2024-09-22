const apiKey = "af69be529eeee203c8d68060cf7689b5&units=imperial";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const serverUrl = "http://localhost:3000/api/projectData";

async function getWeatherData(zip) {
  try {
    const response = await fetch(`${apiUrl}?zip=${zip}&appid=${apiKey}`);
    const data = await response.json();
    console.log("Weather data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

async function postData(path, data) {
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Post data result:", result);
    return result;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
}




async function updateUI() {
  try {
    const response = await fetch(serverUrl);
    const data = await response.json();
    const date = new Date();
    data.date = date;
    console.log("UI data:", data);
    document.getElementById("time-zone").innerHTML = `Time Zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
    document.getElementById("date").innerHTML = `Date: ${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
    document.getElementById("temp").innerHTML = `Temperature: ${data.temperature}°F`;
    document.getElementById("content").innerHTML = `feelings: ${data.userResponse}`;
  } catch (error) {
    console.error("Error updating UI:", error);
    throw error;
  }
}
document.getElementById("generate").addEventListener("click", async () => {
  try {
    const zip = document.getElementById("zip").value;
    const weatherData = await getWeatherData(zip);
    const temperature = weatherData.main.temp;
    const date = new Date();
    const userResponse = document.getElementById("feelings").value;
    const data = { temperature, date, userResponse };
    await postData(serverUrl, data);
    await updateUI();
  } catch (error) {
    console.error("Error generating data:", error);
    alert("An error occurred. Please try again.");
  }
});
