import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-name',
  templateUrl: './get-by-name.component.html',
  styleUrls: ['./get-by-name.component.css']
})
export class GetByNameComponent implements OnInit {
  authorDetails: any;

  constructor(
    private http: HttpClient,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  ngOnInit() {
    if (this.data && this.data.name) {
      const authorName = this.data.name;
      this.getAuthorByName(authorName);
    }
  }
  closeAuthorDetails() {
    console.log('Closing author details...');
    this.authorDetails = null;
    this.router.navigate(['/book-authors-list']);
  }

  getAuthorByName(name: string) {
    const url = `http://localhost:8080/bookAuthors/getByName/${name}`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.authorDetails = response;
        console.log('Author Details:', this.authorDetails);
      },
      (error: any) => {
        console.error(`Error fetching author details: ${error}`);
      }
    );
  }
}
