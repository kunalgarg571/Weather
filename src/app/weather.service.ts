import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { CurrentWeather } from './current-weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  localWeather(city: string) {
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=f6e4ad1d9bf65d48c3e0ac42d6b50dc2")
  }
  WCons(data: any, i: number) {
    return new CurrentWeather(data.list[i].dt_txt,
      data.city.name,
      data.list[i].main.temp,
      data.list[i].weather[0].icon,
      data.list[i].weather[0].description,
      data.list[i].main.temp_max,
      data.list[i].main.temp_min,
      data.list[i].main.pressure,
      data.list[i].main.humidity,
      data.list[i].wind.speed,
      data.city.country)
  }
  getLength(data) {
    return data.list.length
  }
}
