import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HotelService } from './services/hotel/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  time !: number;
  
  constructor(
    private Hotel: HotelService
      
  ) {}
  ngOnInit(){
    const counter = interval(1000);
    counter.subscribe(
      (value) => {
        this.time = value;
      },
      (error) =>{
        console.group('Error :' + error);
      },
      () => {
        console.log('Observable complete !');
      }
    )
  }
}

 