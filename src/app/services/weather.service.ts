import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '23ef6291d5bbeb0a51c44d1c817cf258';
@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit{
//WeatherData!:WeatherData;
  constructor(private http:HttpClient) { }


ngOnInit(){
  //this.getWeatherData('Ohrid');
}

getWeatherData(cityName:string): Observable<WeatherData>{
 return this.http.get<WeatherData>(`${API_URL}/weather?q=${cityName}&appid=${API_KEY}`)
  // .subscribe((res)=>{
  //   console.log(res)
  // }
  //)
}

}
