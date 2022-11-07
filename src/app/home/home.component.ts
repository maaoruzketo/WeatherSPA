import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dservice:DataService, private http:HttpClient) { }

  // constructor(private dService: DataService, private http: HttpClient) {
  //   this.dService.getWeatherData();
  // }

  ngOnInit(): void {
    
  }

}
