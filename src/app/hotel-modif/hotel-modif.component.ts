import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel/hotel.service';

@Component({
  selector: 'app-hotel-modif',
  templateUrl: './hotel-modif.component.html',
  styleUrls: ['./hotel-modif.component.css']
})
export class HotelModifComponent implements OnInit {
  hotel: any = null;
  change:boolean = false;

  constructor(
    private Hotel:HotelService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Hotel.get(id).subscribe((value: any) => {
      console.log(value)
      this.hotel = value;
    });
  }

  modif() {
    this.Hotel.update(this.hotel).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }

}
