import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit  {

  apiUrl: string = 'http://localhost:8080/data';
  data !: any[] ;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  
  getData() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
