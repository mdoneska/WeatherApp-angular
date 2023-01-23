import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit{
WeatherData:any;
  constructor(private http:HttpClient) { }


ngOnInit(){
  //this.getWeatherData('Ohrid');
}

  // getWeatherData(cityName:string){
  //   this.http.get('https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25')
  //   .subscribe((res)=>{
  //     console.log(res)
  //   }
  //   )}

}
