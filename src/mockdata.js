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
  const weatherTypes = ["sunny", "cloudy", "raining"];
  return weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
};

const getRandomTemperature = () => {
  const minTemp = -20;
  const maxTemp = 20;
  return Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
};
