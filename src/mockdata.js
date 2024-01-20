const generateWeatherData = async () => {
  // Mock a .5 second loading time
  await new Promise((r) => setTimeout(r, 500));

  const weeks = 4;
  const daysPerWeek = 7;
  const weatherForecast = [];

  for (let week = 1; week <= weeks; week++) {
    for (let day = 1; day <= daysPerWeek; day++) {
      // Get mock data for a single day
      const weatherType = getRandomWeatherType();
      const temperature = getRandomTemperature();

      const date = new Date("2024-01-01");
      date.setDate(date.getDate() + (day - 1) + (week - 1) * daysPerWeek);
      const dayOfWeek = date.toLocaleString("en-FI", {weekday: "long"});

      // Include daily data in a larger array
      weatherForecast.push({
        week,
        dayOfWeek,
        weatherType,
        temperature,
      });
    }
  }

  return weatherForecast;
};

export const getWeatherData = generateWeatherData;

const getRandomWeatherType = () => {
  const weatherTypes = ["sunny", "cloudy", "raining", "windy", "cold", "freezing", "snowing"];
  return weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
};

const getRandomTemperature = () => {
  const minTemp = -30;
  const maxTemp = 30;
  return Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
};

export const getTodosBasedOnWeather = (weatherType, temperature) => {
  // Typical cases for weather and temperature combinations
  // Case 1: Sunny weather, temperature is hot, more than 25
  if (weatherType === "sunny" && temperature > 25) {
    return ["Water plants", "Stay hydrated", "Buy an air conditioner", "Use sunscreen", "Water plants"];
  } else if (weatherType === "sunny") {
    return ["Use sunscreen", "Wear a hat", "Wear sunglasses"]
  } else if (weatherType === "cloudy") {
    return  ["Take a walk if temperature is decent"]
  } else if (weatherType === "windy") {
    return ["Stay inside", "Secure loose items like lawn furniture", "Dress in layers"]
  } else if (weatherType === "raining") {
    return ["Get an umbrella", "Wear a rain coat", "Enjoy indoor activities"];
  } else if (weatherType === "cold" && (temperature < 0 && temperature > -30)) {
    return ["Dress in layers to stay warm", "Cover outdoor plants", "Update winter car survival kit", "Warm up car before driving"]
  } else if (weatherType === "freezing" && temperature <= -30) {
    return ["Avoid being outside if possible", "Dress in layers to stay warm"]
  } else if (weatherType === "snowing" || temperature <= 0) {
    return ["Do snow clearing", "Clear car from snow", "Dress in warm clothes", "Stay off roads if possible"]
  } else {
    return ["No predefined tasks for this weather/temperature"]
  }
}
