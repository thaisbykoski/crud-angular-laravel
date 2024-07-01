import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = "b908f4c2";
  private apiUrl = "https://api.hgbrasil.com/weather";

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `https://api.hgbrasil.com/weather?key=e5dfe087&city_name=${city}`;
    return this.http.get(url);
  }
}
