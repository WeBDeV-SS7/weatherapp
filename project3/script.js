const apikey = '0b93b4e2eac7e26e378c3e0312e7204b';

const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const weather_body = document.querySelector('.weather_body');
const location_not_found = document.querySelector('.location_not_found');
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector('.location-not-found').style.display = 'flex';
    document.querySelector('.weather-body').style.display = 'none';
  } else {
    document.querySelector('.location-not-found').style.display = 'none';
    document.querySelector('.weather-body').style.display = 'flex';
    var data = await response.json();

    const weather_image = document.querySelector('.weather-image');

    document.querySelector('.description').innerHTML =
      data.weather[0].description;
    document.querySelector('.wind span').innerHTML =
      Math.round(data.wind.speed) + 'km/hr';
    document.querySelector('.humidity span').innerHTML =
      data.main.humidity + '%';
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°C';

    if (data.weather[0].main == 'Clouds') {
      weather_image.src = './image/haze.png';
    } else if (data.weather[0].main == 'clear') {
      weather_image.src = './image/haze.png';
    } else if (data.weather[0].main == 'sun') {
      weather_image.src = './image/sun.png';
    } else if (data.weather[0].main == 'winter') {
      weather_image.src = './image/winter_10961173.png';
    } else if (data.weather[0].main == 'snowy') {
      weather_image.src = './image/snowy.png';
    } else if (data.weather[0].main == 'black') {
      weather_image.src = './image/night.png';
    }
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

/*const inputBox = document.querySelector('.inputBox');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-image');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind_speed = document.querySelector('.wind_speed');

async function checkWeather(city_name) {
  const api_key = ' 0b93b4e2eac7e26e378c3e0312e7204b';
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}';
  const weather_data = await fetch('${url}').then((response) => {
    response.json();
  });
  console.log(weather_data);
}
searchBtn.addEventListener('click', () => {
  checkWeather(inputBox.value);
});*/
