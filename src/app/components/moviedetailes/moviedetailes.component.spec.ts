import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailesComponent } from './moviedetailes.component';

describe('MoviedetailesComponent', () => {
  let component: MoviedetailesComponent;
  let fixture: ComponentFixture<MoviedetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviedetailesComponent]
    });
    fixture = TestBed.createComponent(MoviedetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
