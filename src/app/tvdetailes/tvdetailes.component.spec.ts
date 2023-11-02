import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvdetailesComponent } from './tvdetailes.component';

describe('TvdetailesComponent', () => {
  let component: TvdetailesComponent;
  let fixture: ComponentFixture<TvdetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvdetailesComponent]
    });
    fixture = TestBed.createComponent(TvdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
