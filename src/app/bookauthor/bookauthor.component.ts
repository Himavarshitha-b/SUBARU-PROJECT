import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-bookauthor',
  templateUrl: './bookauthor.component.html',
  styleUrls: ['./bookauthor.component.css']
})
export class BookAuthorComponent implements OnInit {
  bookauthor = {
    name: '',
    birthdate: '',
    nationality: '',
    yearOfPublication: '',
    bookName: ''
  };
  optional: any;
  

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
     this.lettersOnly();
    
    this.initValidation();
  }

 lettersOnly ()
 {
  $.validator.addMethod("lettersOnly", function(value:any, element:any) {

        return  /^[A-Za-z\s]+$/.test(value);
    
    });
 }


  initValidation() {
    // $.validator.addMethod("lettersOnly", (value: any, element: any) => {
    //   return this.optional(element) || /^[A-Za-z]+$/i.test(value);
    // }, "Please enter letters only");
  
    $('#bookauthor').validate({
      rules: {
        name: {
          required: true,
          lettersOnly: true 
        },
        birthdate: "required",
          
        
        nationality: {
          required: true,
           lettersOnly: true 
        },
        yearOfPublication:
        {
          required:true,
          min:4,
        },
        bookName: {
          required: true,
           lettersOnly: true 
        },
        addButton: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Name is required',
          lettersOnly: 'Please enter letters only',
          
          
        },
        birthdate:'Birthdate is required',
      
      
        nationality: {
          required: 'Nationality is required',
           lettersOnly: 'Please enter letters only'
        },
        yearOfPublication:{
          required:'yearofPublication is required',
          min:'numbers only '

        },

        
        bookName: {
          required: 'Book name is required',
           lettersOnly: 'Please enter letters only'
        },
        addButton: {
          required: 'Add button is required'
        }
      }
    });
    // $.validator.messages.lettersOnly = 'Please enter letters only';
  }
  
  addAuthor() {
    if ($('#bookauthor').valid()) {
    const url = 'http://localhost:8080/bookAuthors/addBookAuthor';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = JSON.stringify(this.bookauthor);

    this.http.post(url, body, { headers }).subscribe(response => {
      alert("BookAuthor has been added successfully")
      this.router.navigate(['/book-authors-list']);
      console.log(response);
    
    }, error => {
      alert("Error while adding the BookAuthor");
      console.error(error);
    });
  }
}}








  

