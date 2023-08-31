export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=4a09027c7999443f82d120533231807&q=${city}&aqi=yes`
  );
  const data = await response.json();
  return data;
};
