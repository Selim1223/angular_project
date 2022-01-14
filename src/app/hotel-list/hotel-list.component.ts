import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels!:any;
  constructor(
    private Hotel: HotelService
  ) { }

  ngOnInit(): void {
    this.Hotel.getAllHotels().subscribe((data: any) => {
      this.hotels = data;
    });
  }

}
