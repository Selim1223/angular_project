import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelModifComponent } from './hotel-modif/hotel-modif.component';
import { HotelNewComponent } from './hotel-new/hotel-new.component';

const routes: Routes = [
  {
    path:'hotels',
    component: HotelListComponent
  },
  {
    path:'new',
    component: HotelNewComponent
  },
  {
    path:'modif/:id',
    component: HotelModifComponent
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
