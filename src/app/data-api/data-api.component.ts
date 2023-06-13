
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface DataItem {
  id: number;
  name: string;
  age: number;
  email: string;
}
@Component({
  selector: 'app-data-api',
  templateUrl: './data-api.component.html',
  styleUrls: ['./data-api.component.css']
})
export class DataAPIComponent implements OnInit {
  data: DataItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:8080/dataCsv', { responseType: 'text' })
      .subscribe(response => {
        const lines = response.split('\n');
        const headers = lines[0].split(',');
  
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');
  
          if (values.length !== headers.length) {
            continue; // Skip the line if it doesn't have the correct number of columns
          }
  
          const id = Number(values[0]);
          const name = values[1];
          const age = Number(values[2]);
          const email = values[3];
  
          if (isNaN(id) || isNaN(age)) {
            continue; // Skip the line if ID or Age is not a valid number
          }
  
          const dataItem: DataItem = {
            id: id,
            name: name,
            age: age,
            email: email
          };
          this.data.push(dataItem);
        }
      });
  }
  


}


