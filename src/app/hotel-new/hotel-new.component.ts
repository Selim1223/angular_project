import { Component, OnInit } from '@angular/core';
import { Hotels } from '../models/hotels.model';
import { HotelService } from '../services/hotel/hotel.service';

@Component({
  selector: 'app-hotel-new',
  templateUrl: './hotel-new.component.html',
  styleUrls: ['./hotel-new.component.css']
})
export class HotelNewComponent implements OnInit {

  public hotel!: Hotels;
  constructor(
    private Hotel: HotelService
  ) { }

  ngOnInit(): void {
    this.hotel = new Hotels();
  }

  add(){
    this.Hotel.saveNewHotel(this.hotel).subscribe(()=>{
      this.hotel = new Hotels();
      alert('vous avez ajouté un nouvel hotel !');
    })
  }

}
