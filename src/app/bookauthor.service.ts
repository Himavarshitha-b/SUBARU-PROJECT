import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



interface bookauthor {
  name: string;
  birthdate: string;
  nationality: string;
  yearOfPublication: string;
  bookName: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookauthorService {
 
  

  private baseURL ="http://localhost:8080/bookAuthors";
  private userName = 'userName'; // Replace with your username
  private password = 'password';
  private getBasicAuthHeader(): string {
    const credentials = `${this.userName}:${this.password}`;
    const encodedCredentials = btoa(credentials);
    return `Basic ${encodedCredentials}`;
  }

  constructor(private http: HttpClient) { }

  getAllBookAuthors() {
    const headers = new HttpHeaders().set('Authorization', this.getBasicAuthHeader());
    // return this.http.get(`${this.baseURL}/getAllBookAuthors`);
    return this.http.get<bookauthor[]>(`${this.baseURL}/getAllBookAuthors`, { headers });
  }

  addBookAuthor(authorData: any) {
    return this.http.post(`${this.baseURL}/addBookAuthor`, authorData);
  }

  deleteBookAuthors(authorId: string) {
    return this.http.delete(`${this.baseURL}/deleteBookAuthors/${authorId}`);
  }

  updateBookAuthor(authorId: String, authorData: any) {
    return this.http.put(`${this.baseURL}/updateBookAuthors/${authorId}`, authorData);
  }
  
  getBookAuthor(authorId: String): Observable<bookauthor> {
    return this.http.get<bookauthor>(`${this.baseURL}/getBookAuthor/${authorId}`);
  }
}
