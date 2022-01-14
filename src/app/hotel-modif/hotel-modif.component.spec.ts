import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelModifComponent } from './hotel-modif.component';

describe('HotelModifComponent', () => {
  let component: HotelModifComponent;
  let fixture: ComponentFixture<HotelModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
