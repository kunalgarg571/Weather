import { Component, OnInit } from '@angular/core';
import { WeatherService } from "src/app/weather.service";
import { CurrentWeather } from "src/app/current-weather";
import 'rxjs/Rx';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  myWeather: CurrentWeather
  location
  city: string
  constructor(private ws: WeatherService) { }

  ngOnInit() {
  }
  WeatherForecast() {
    this.ws.localWeather(this.city).subscribe(
      (data) => {
        this.myWeather = this.ws.WCons(data, 0)
      }
    )
  }
}
