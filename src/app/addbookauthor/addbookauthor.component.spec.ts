import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookauthorComponent } from './addbookauthor.component';

describe('AddbookauthorComponent', () => {
  let component: AddbookauthorComponent;
  let fixture: ComponentFixture<AddbookauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbookauthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbookauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
