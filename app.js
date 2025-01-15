const axios = require("axios");
const readline = require("readline");

require("dotenv").config();
const apiKey = process.env.API_KEY;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function getCoordinates(city) {
  const coordinatesApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  const coordinatesResponse = await axios.get(coordinatesApi);
  const coordinates = coordinatesResponse.data;

  if (coordinates.length === 0) {
    throw new Error(
      "Cidade não encontrada. Verifique o nome e tente novamente."
    );
  }
  const { lat, lon, state } = coordinates[0];
  return (
    { lat, lon, state } || {
      lat: "Não encontrado",
      lon: "Não encontrado",
      state: "Não encontrado",
    }
  );
}

async function getWeather(lat, lon) {
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const weatherResponse = await axios.get(weatherApi);
  return weatherResponse.data;
}

async function main() {
  rl.question("Insira o nome da cidade: ", async (city) => {
    if (!city.trim()) {
      console.log("Cidade não informada");
      rl.close();
      return;
    }

    console.log("Buscando dados da cidade, por favor aguarde...");
    rl.close();

    try {
      const { lat, lon, state } = await getCoordinates(city);
      const weatherData = await getWeather(lat, lon);

      console.log("-------------------------------------------------");
      console.log(`Cidade: ${city}, ${state}`);
      console.log(`Temperatura: ${weatherData.main.temp.toFixed(1)}°C`);
      console.log(
        `Sensação térmica: ${weatherData.main.feels_like.toFixed(1)}°C`
      );
      console.log("-------------------------------------------------");
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:");
      if (error.response) {
        console.error(
          `Erro ${error.response.status}: ${error.response.statusText}`
        );
      } else if (error.request) {
        console.error(
          "Não foi possível conectar à API. Verifique sua conexão com a internet."
        );
      } else {
        console.error(error.message);
      }
    }
  });
}

main();
