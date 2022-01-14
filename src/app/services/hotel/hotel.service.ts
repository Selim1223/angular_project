import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Hotels } from 'src/app/models/hotels.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private dbPath = '/hotels';
  hotelsRef: AngularFirestoreCollection<Hotels>;
  private hotels? : any;
  hotelSubject = new Subject<any[]>();
  constructor(
    private db:AngularFirestore
  ) { 
    this.hotelsRef = db.collection(this.dbPath);
  }
  
  getAllHotels(): any {
    return this.hotelsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }
  saveNewHotel(hotel:Hotels): any{
    return new Observable( obs=>{
      this.hotelsRef.add({...hotel}).then(()=>{
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.hotelsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(hotel: Hotels) {
    return new Observable(obs => {
      this.hotelsRef.doc(hotel.id).update(hotel);
      obs.next();
    });
  }
  
  delete(id: any){
    this.db.doc(`hotels/${id}`).delete();
  }

}
