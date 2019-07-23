var cityInput = document.getElementById('cityInput');
document.querySelector('form.pure-form').addEventListener('submit', function(e) {
  document.getElementById("root").innerHTML = "";

  e.preventDefault();
  var key = '9cfbdba049714e24491d7eb24a81a427';
  // 'https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityInput.value + '&' + 'appid='+ key + '&units=metric')
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    city = data.name;
    country = data.sys.country;
    temp = data.main.temp;
    temp_max = data.main.temp_max;
    temp_min = data.main.temp_min;
    imagecode = data.weather[0].icon;
    console.log(data);
    console.log(imagecode);

    const app = document.getElementById('root');

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute("src", "http://openweathermap.org/img/w/" + imagecode + ".png");
    weatherIcon.setAttribute("width", "80");
    weatherIcon.setAttribute("height", "80");

    const cityCountry = document.createElement('p');
    cityCountry.textContent = city + ', ' + country;

    const temprature = document.createElement('h3');
    temprature.textContent = "Current temprature: " + temp;

    const min_temprature = document.createElement('p');
    min_temprature.textContent = "Minimum temprature: " + temp_min + ' & ' + "Minimum temprature: " + temp_max;

    const humidity = document.createElement('p');
    humidity.textContent = "Humidity: " + data.main.humidity;

    app.appendChild(weatherIcon)
    app.appendChild(temprature)
    app.appendChild(cityCountry)
    app.appendChild(min_temprature)
    app.appendChild(humidity)


    cityInput.value = '';
  })
  .catch(function() {
    // catch any errors
  });
})



// function weatherBalloon( ) {
//   var key = '9cfbdba049714e24491d7eb24a81a427';
//   // 'https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key
//   fetch('https://api.openweathermap.org/data/2.5/weather?q=Ahmadabad' + '&' + 'appid='+ key + '&units=metric')
//   .then(function(resp) { return resp.json() }) // Convert data to json
//   .then(function(data) {
//     city = data.name;
//     country = data.sys.country;
//     temp = data.main.temp;
//     temp_max = data.main.temp_max;
//     temp_min = data.main.temp_min;
//     console.log(city);
//     console.log(country);
//     console.log(data);
//     console.log(temp_min)
//   })
//   .catch(function() {
//     // catch any errors
//   });
// }
//
// window.onload = function() {
//   weatherBalloon( );
// }
