import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsListComponent } from './directors-list.component';

describe('DirectorsListComponent', () => {
  let component: DirectorsListComponent;
  let fixture: ComponentFixture<DirectorsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorsListComponent]
    });
    fixture = TestBed.createComponent(DirectorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
