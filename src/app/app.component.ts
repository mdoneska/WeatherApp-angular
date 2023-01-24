import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherConditionTypes } from './models/weatherConditions.enum';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public weatherData : WeatherData | any;
  public WeatherConditionTypes = WeatherConditionTypes;
  public condition : string = '';
  public cities : any[] = [];
  cityName: string = 'Ohrid'
  constructor(private weatherService: WeatherService) {


  }
  ngOnInit(): void {
    this.getCities();
    this.getWeatherData(this.cityName)
  }
  onSubmit(){
    this.getWeatherData(this.cityName)
    //this.cityName=''
  }

public getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response:any)=>{
        this.weatherData=response;
        this.setupWeatherData();
        console.log(this.weatherData)
        console.log(this.weatherData?.weather[0].main)
      }
    })
}

public getCities() {
  this.weatherService.getCities().subscribe((cities) => {
    this.cities = cities.concat.apply([], cities);
  })
}

setupWeatherData() {
  this.weatherData.main.temp_min = this.weatherData?.main.temp_min - 273.15;
  this.weatherData.main.temp_max = this.weatherData?.main.temp_max - 273.15;
  this.weatherData.main.temp = this.weatherData?.main.temp - 273.15;
  this.condition = this.weatherData?.weather[0].main;
}





}
