import { Injectable } from '@angular/core';
import { Weather } from './../interface/weather';
import { Extra } from './../interface/extra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.getWeatherData();
  }




  url_weather = "https://api.openweathermap.org/data/2.5/weather?q=stockton,ca";
  url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
  // url_city = document.getElementById('userCity');
  url_units = "&units=imperial";
  apiKey = "&appid=4d8cd4f16d0817094a8e1d42bfc0faca";
  weatherURL = this.url_weather + this.url_units + this.apiKey;
  // forecastURL = this.url_forecast + this.url_city + this.url_units + this.apiKey;

  // currentWeather= ;
  // weatherHigh = ;
  // weatherLow = ;
  weatherInfo = [];

  getURL(URL: string): Observable<any> {
    return this.http.get(URL);
  }

  //grab the epoch date and convert it to mm/dd
  timestamp = 1293683278;
  //timestamp = weatherDate;
  date = new Date(this.timestamp * 1000);
  month = this.date.getMonth() + 1;
  day = this.date.getDate();
  currentDate = `${this.month}/${this.day}`;

  //grab the weather for the day. high, low, and current
  getWeatherData() {

    this.getURL(this.weatherURL).subscribe(

      x => {
          const wInfo: Weather = {
            forecastHigh: x.main.temp_max,
            forecastLow: x.main.temp_min,
            currentTemp: x.main.temp,
            date: x.dt,
            icon: x.weather.icon,
            city: x.name,
            state: x.country
          };
          this.weatherInfo.push(wInfo);
        }
        console.log(this.weatherInfo);
        console.log(this.currentDate);
    );

    return this.weatherInfo;

  }

  // getForecastData() {

  //   this.getURL(this.forecastURL).subscribe(

  //   );

  // }


  //   //Variables and Arrays
  //   cities = [];
  //   savedCities = [];
  //   currentCity = 0;

  //   cityName = document.getElementById('cityName');
  //   city = document.getElementById('userCity');
  //   callWeather = document.getElementById('loadWeather');

  //   //Today's Info
  //   currentDate = document.getElementById('currentDate');
  //   weatherHigh = document.getElementById('weatherHigh');
  //   weatherLow = document.getElementById('weatherLow');
  //   weatherIMG = document.getElementById('weatherIMG');
  //   //Day1 Info
  //   Date1 = document.getElementById('Date1');
  //   forecast1High = document.getElementById('forecast1High');
  //   forecast1Low = document.getElementById('forecast1Low');
  //   forecast1IMG = document.getElementById('forecast1IMG');


  //   //HeavyWeather relates to the weather of the current day...and is a JoJo reference
  //   if(localStorage.getItem('HeavyWeather')) {
  //   currentDayW();
  // }

  // //Function for Current Day
  // function currentDayW() {
  //   if (localStorage.getItem('HeavyWeather')) {
  //     cities = JSON.parse(localStorage.getItem('HeavyWeather'));
  //   }

  //   console.log("Cities are below");
  //   console.log(cities.length);
  //   console.log("current City is " + currentCity);
  //   console.log(cities[currentCity]);
  //   currentDate.innerText = new Date().toLocaleDateString();
  //   weatherHigh.innerText = `High: ${Math.round(cities[currentCity].main.temp_max)}°F`;
  //   weatherLow.innerText = `Low: ${Math.round(cities[currentCity].main.temp_min)} °F`;
  //   weatherIMG.setAttribute('src', 'http://openweathermap.org/img/wn/' + cities[currentCity].weather[0].icon + '@2x.png');
  //   console.log('=======' + cities[currentCity].weather[0].icon);
  //   cityName.innerText = cities[currentCity].name;
  // }
  // //WeatherReport relates to to forecast weather... and is also a JoJo reference...and is HeavyWeather's Stand
  // if (localStorage.getItem('WeatherReport')) {

  //   forecastWeather();
  // }

  // function forecastWeather() {
  //   if (localStorage.getItem('WeatherReport')) {
  //     savedCities = JSON.parse(localStorage.getItem('WeatherReport'));
  //   }


  //   console.log(savedCities);

  //   //Date1.innerText = new Date().toLocaleDateString();
  //   setDate();

  //   Date1.innerText = setDate(1);
  //   forecast1High.innerText = `High: ${Math.round(savedCities[0].list[7].main.temp_max)} °F`;
  //   forecast1Low.innerText = `Low: ${Math.round(savedCities[0].list[7].main.temp_min)} °F`;
  //   console.log(`http://openweatherma.org/img/wn/${savedCities[currentCity].list[7].weather[0].icon}@2x.png`);
  //   forecast1IMG.setAttribute('src', `http://openweathermap.org/img/wn/${savedCities[currentCity].list[7].weather[0].icon}@2x.png`);

  //   Date2.innerText = setDate(2);
  //   forecast2High.innerText = `High: ${Math.round(savedCities[0].list[15].main.temp_max)} °F`;
  //   forecast2Low.innerText = `Low: ${Math.round(savedCities[0].list[15].main.temp_min)} °F`;
  //   console.log(`http://openweatherma.org/img/wn/${savedCities[currentCity].list[15].weather[0].icon}@2x.png`);
  //   forecast2IMG.setAttribute('src', `http://openweathermap.org/img/wn/${savedCities[currentCity].list[15].weather[0].icon}@2x.png`);

  //   Date3.innerText = setDate(3);
  //   forecast3High.innerText = `High: ${Math.round(savedCities[0].list[23].main.temp_max)} °F`;
  //   forecast3Low.innerText = `Low: ${Math.round(savedCities[0].list[23].main.temp_min)} °F`;
  //   console.log(`http://openweatherma.org/img/wn/${savedCities[currentCity].list[23].weather[0].icon}@2x.png`);
  //   forecast3IMG.setAttribute('src', `http://openweathermap.org/img/wn/${savedCities[currentCity].list[23].weather[0].icon}@2x.png`);

  //   Date4.innerText = setDate(4);
  //   forecast4High.innerText = `High: ${Math.round(savedCities[0].list[31].main.temp_max)} °F`;
  //   forecast4Low.innerText = `Low: ${Math.round(savedCities[0].list[31].main.temp_min)} °F`;
  //   console.log(`http://openweatherma.org/img/wn/${savedCities[currentCity].list[31].weather[0].icon}@2x.png`);
  //   forecast4IMG.setAttribute('src', `http://openweathermap.org/img/wn/${savedCities[currentCity].list[31].weather[0].icon}@2x.png`);
  //   //currentCity++;
  // }

  // //Buttons & Their Event Listeners

  // function setDate(num) {
  //   let today = new Date();
  //   return `${(today.getMonth()) + 1} / ${(today.getDate()) + num}`;
  //   //return date;
  // }

  // function prevCity() {
  //   if (cities.length > 0) {
  //     if (currentCity > 0) currentCity--;
  //     else currentCity = cities.length - 1;
  //     currentDayW(currentCity);
  //     forecastWeather(currentCity);
  //   }
  // }
  // function nextCity() {
  //   if (cities.length > 0) {
  //     if (currentCity < cities.length - 1) currentCity++;
  //     else currentCity = 0;
  //     currentDayW(currentCity);
  //     forecastWeather(currentCity);
  //   }
  // }

  // //Current Issue causes the delete button to delete the current city, but then causes and error
  // //that makes the delete button, next button, and previous buttons to stop working.
  // //If the user types in a city and hits enter the new city's info will display and buttons will
  // //resume working as intended. Everytime a city is deleted, a city must be searched before
  // //the application will resume.
  // function eraseMe() {
  //   //Splice outright removes, while Slice 'starfishes'.
  //   cities.splice(cities.indexOf(currentCity), 1);
  //   savedCities.splice(savedCities.indexOf(currentCity), 1);
  //   prevCity();
  //   // if(currentCity < cities.length -1) currentCity++;
  //   // else if(currentCity > 0) currentCity--;
  // }

  // let delBtn = document.getElementById('delBtn');
  // delBtn.addEventListener('click', function (e) {
  //   eraseMe();
  //   saveCurrent();
  //   saveForecast();
  // });

  // let prevBtn = document.getElementById('prevBtn');
  // prevBtn.addEventListener('click', function (e) {
  //   console.log("I still work");
  //   prevCity();
  // });

  // let nextBtn = document.getElementById('nextBtn');
  // nextBtn.addEventListener('click', function (e) {
  //   console.log("I still work ");
  //   nextCity();
  // });

  // city.addEventListener('keypress', function (e) {

  //   if (e.keyCode === 13) {
  //     let success = true;
  //     console.log('after enter');
  //     if (cities.length > 0) {
  //       for (let i = 0; i < cities.length; i++) {
  //         console.log('after for loop')
  //         if (cities[i].name === city.value) {
  //           // alert('You have entered this location already. Please enter a new one.');
  //           success = false;
  //           console.log('key dfsdkhf')
  //           //return;
  //         }
  //       }
  //       if (success) {
  //         console.log('after else');
  //         let url_weather = "https://api.openweathermap.org/data/2.5/weather?q=";
  //         let url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
  //         let url_city_pt2 = city.value;
  //         let url_temp_pt3 = "&units=imperial";
  //         let url_key_pt4 = "&appid=4d8cd4f16d0817094a8e1d42bfc0faca";

  //         let Weather = url_weather + url_city_pt2 + url_temp_pt3 + url_key_pt4;

  //         let Forecast = url_forecast + url_city_pt2 + url_temp_pt3 + url_key_pt4;
  //         summonWeather(Weather);
  //         Storm(Forecast);
  //         currentCity = cities.length;
  //         currentDayW();
  //         forecastWeather();
  //         console.log(Weather);
  //         //city.value = "";

  //         // nextCity();
  //         //currentDayW();
  //         //forecastWeather();
  //         //saveCurrent();
  //       }
  //       else {
  //         alert('You have entered this location already. Please enter a new one.');
  //       }
  //       //city.value = "";
  //       document.getElementById("userCity").reset();




  //     }
  //     else {
  //       console.log('after else 2');
  //       let url_weather = "https://api.openweathermap.org/data/2.5/weather?q=";
  //       let url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
  //       let url_city_pt2 = city.value;
  //       let url_temp_pt3 = "&units=imperial";
  //       let url_key_pt4 = "&appid=4d8cd4f16d0817094a8e1d42bfc0faca";

  //       let Weather = url_weather + url_city_pt2 + url_temp_pt3 + url_key_pt4;

  //       let Forecast = url_forecast + url_city_pt2 + url_temp_pt3 + url_key_pt4;
  //       summonWeather(Weather);
  //       console.log(Weather);
  //       Storm(Forecast);
  //       currentDayW();
  //       forecastWeather();
  //       //city.value = "";
  //       document.getElementById("myForm").reset();
  //       nextCity();
  //       // currentDayW();
  //       // forecastWeather();

  //       //saveCurrent();
  //     }

  //   }
  //   //console.log(cities);
  // });


  // //---------Load Your JSON Weather File--------//

  // function summonWeather(Weather) {
  //   let xmlhttp = new XMLHttpRequest();
  //   //Put your weather API URL and KEY here
  //   //let url = "";
  //   console.log("Summon Weather");
  //   console.log(Weather);
  //   xmlhttp.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       let myArr = JSON.parse(this.responseText);

  //       cities.push(myArr);

  //       //console.log(cities[0].main.temp);
  //       getWeather(cities);
  //       console.log("Saving current day");
  //       saveCurrent(cities);
  //     }
  //   };
  //   xmlhttp.open("GET", Weather, true);
  //   xmlhttp.send();


  // }

  // function Storm(Forecast) {
  //   let xmlhttp = new XMLHttpRequest();
  //   //Put your weather API URL and KEY here
  //   //let url = "";

  //   xmlhttp.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       let myArr = JSON.parse(this.responseText);

  //       savedCities.push(myArr);
  //       //console.log(savedCities);
  //       //getWeather(savedCities);
  //       saveForecast(savedCities);
  //       currentDayW();
  //       forecastWeather();
  //     }
  //   };
  //   xmlhttp.open("GET", Forecast, true);
  //   xmlhttp.send();
  // }


  // function getWeather(info) {
  //   //console.log(info);
  //   currentDate.innerText = new Date().toLocaleDateString();
  // }

  // function saveCurrent(current) {
  //   console.log(current);
  //   localStorage.setItem('HeavyWeather', JSON.stringify(current));
  // }

  // function saveForecast(forecast) {
  //   console.log(forecast);
  //   localStorage.setItem('WeatherReport', JSON.stringify(forecast));
  // }

}