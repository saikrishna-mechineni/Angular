import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesOrdinalComponent } from './pipes-ordinal.component';

describe('PipesOrdinalComponent', () => {
  let component: PipesOrdinalComponent;
  let fixture: ComponentFixture<PipesOrdinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesOrdinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesOrdinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
