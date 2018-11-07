import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetchdata',
  templateUrl: './fetchdata.component.html',
  styleUrls: ['./fetchdata.component.css']
})
export class FetchdataComponent {

  public forecasts: WeatherForecast[];

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:5000/api/SampleData/WeatherForecasts').subscribe(response => {
      this.forecasts = response as WeatherForecast[];
    }, error => {
      console.log(error);
    });
  }
}

  interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
