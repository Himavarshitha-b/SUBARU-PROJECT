import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorListComponent } from './book-authors-list.component';

describe('BookAuthorsListComponent', () => {
  let component: BookAuthorListComponent;
  let fixture: ComponentFixture<BookAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
