import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetalertComponent } from './sweetalert.component';

import Snackbar from 'awesome-snackbar';

describe('SweetalertComponent', () => {
  let component: SweetalertComponent;
  let fixture: ComponentFixture<SweetalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetalertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  new Snackbar('Helloooo, Good Morning',
    { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
  );
  
});
