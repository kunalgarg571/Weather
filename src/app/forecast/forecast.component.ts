import { Component, OnInit } from '@angular/core';
import { WeatherService } from "src/app/weather.service";
import { CurrentWeather } from "src/app/current-weather";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  flag: boolean = false
  foreWeather: CurrentWeather[] = [];
  city: string
  constructor(private ws: WeatherService) { }

  ngOnInit() {
  }
  Forecast() {
    this.ws.localWeather(this.city).subscribe(
      (data) => {
        for (let i = 0; i < this.ws.getLength(data); i = i + 8) {
          const temp = this.ws.WCons(data, i)
          this.foreWeather[i / 8] = temp
          this.flag = true
        }
      }
    )
  }
}
