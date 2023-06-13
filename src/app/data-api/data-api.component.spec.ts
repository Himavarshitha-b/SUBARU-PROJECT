import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAPIComponent } from './data-api.component';

describe('DataAPIComponent', () => {
  let component: DataAPIComponent;
  let fixture: ComponentFixture<DataAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
