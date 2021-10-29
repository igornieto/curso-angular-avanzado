import { Injectable } from "@angular/core";

const API_KEY = '0ba4a5a1b1522f77eba7e3080302ae87';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getWeatherByCity(city: string) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(res => {
        if(!res.ok) {
          console.log('La ciudad no existe');
          return null;
        }
        return res.json()
      })
      .catch(err => {
        console.log('Error en el GET', err);
      })
  }
}