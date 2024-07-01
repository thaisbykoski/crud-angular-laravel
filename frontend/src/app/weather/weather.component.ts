// weather.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weatherData: any;
  city: string = ''; 
  weatherIcon: string = ''; 

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city)
      .subscribe(data => {
        this.weatherData = data;
        this.weatherIcon = this.getWeatherIconUrl(data.results.condition_slug);
      });
  }

  getWeatherIconUrl(conditionSlug: string): string {
    switch (conditionSlug) {
      case 'rain':
        return 'assets/icons/rain.svg';
      case 'clear_day':
        return 'assets/icons/clear_day.svg';
      case 'clear_night':
        return 'assets/icons/clear_night.svg';
      case 'cloud':
        return 'assets/icons/cloud.svg';
      case 'cloudly_day':
        return 'assets/icons/cloudly_day.svg';
      case 'cloudly_night':
        return 'assets/icons/cloudly_night.svg';
      case 'fog':
        return 'assets/icons/fog.svg';
      case 'hail':
        return 'assets/icons/hail.svg';
      case 'none_day':
        return 'assets/icons/none_day.svg';
      case 'none_night':
        return 'assets/icons/none_night.svg';
      case 'snow':
        return 'assets/icons/snow.svg';
      case 'storm':
        return 'assets/icons/storm.svg';
      default:
        return 'assets/icons/default.svg'; 
    }
  }
}
