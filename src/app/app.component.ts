import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // WeatherData?:WeatherData
  cityName: string = 'Ohrid'
  constructor(private weatherService: WeatherService) {


  }
  ngOnInit(): void {
    // this.weatherService.getWeatherData('Ohrid')
    // .subscribe({
    //   next: (response)=>{
    //     console.log(response)
    //   }
    // })
  
  }
  onSubmit(){
    this.getWeatherDate(this.cityName)
    this.cityName=''
  }

private getWeatherDate(cityName:string){
    // this.weatherService.getWeatherData('Ohrid')
    // .subscribe({
    //   next: (response)=>{
    //     console.log(response)
    //   }
    // })
}


}
