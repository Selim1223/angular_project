import { Component, Input, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() hotelName?: string;
  @Input() hotelOnAir?: boolean;
  @Input() hotelPhoto?: string;
  @Input() hotelCountry?: string;
  @Input() hotelRate?: string;
  @Input() hotelAdresse?: string;
  @Input() hotelStartOfStay?: string;
  @Input() hotelCapacity?: string;
  @Input() hotelEndOfStay?: string;
  @Input() hotelDescription?: string;
  @Input() hotelTime?: string;
  @Input() id?: string ;


  constructor(
    private Hotel: HotelService
  ) { }

  ngOnInit(): void {
  }
  getOnAir() {
    return this.hotelOnAir;
  }

  onWatchHotel() {
    alert('il s\'agit de l\'hotel : '+this.hotelName);
  }

  changeColor() {
    return this.hotelOnAir ? 'blue' : 'red';
  }

  suppr():void {
    this.Hotel.delete(this.id);
  }

}
