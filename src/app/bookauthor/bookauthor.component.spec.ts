import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorComponent } from './bookauthor.component';

describe('BookauthorComponent', () => {
  let component: BookAuthorComponent;
  let fixture: ComponentFixture<BookAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
