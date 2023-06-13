import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetByNameComponent } from '../get-by-name/get-by-name.component';
import { UpdateAuthorFormComponent } from '../update-author-form/update-author-form.component';
import { formatDate } from '@angular/common';
import * as saveAs from 'file-saver';
import { RolesService } from '../roles.service';
import * as XLSX from 'xlsx';




@Component({
  selector: 'app-book-authors-list',
  templateUrl: './book-authors-list.component.html',
  styleUrls: ['./book-authors-list.component.css']
})
export class BookAuthorListComponent implements OnInit {
  
  bookAuthors: any[] = [];
  getAuthorDetails: any;
  errorMessage!: string;
  authService: any;


  constructor(private http: HttpClient,private dialog: MatDialog,private router:Router,public rolesService:RolesService) { }
 

  ngOnInit() {
    this.getAllBookAuthors();
  }
 

  getAllBookAuthors() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.http.get('http://localhost:8080/bookAuthors/getAllBookAuthors', { headers }).subscribe((response: any) => {
      this.bookAuthors = response.map((author: any) => {

        return {
          id: author.id,
          name: author.name,
          age:author.age,
          birthdate: author.birthdate,
          nationality: author.nationality,
          yearOfPublication: author.yearOfPublication,
          yearOfPublicationInWords: author.yearOfPublicationInWords,
          bookName: author.bookName,
          // countryIsoCode:author.countryIsoCode,
          birthdateInEST:author.birthdateInEST


        }
      });
    });
  }


  deleteAuthor(authorId: number) {
    if (confirm("Are you sure you want to delete this item?")) {
      const url = 'http://localhost:8080/bookAuthors/deleteBookAuthors';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
  
      this.http.delete(`${url}/${authorId}`, { headers, observe: 'response' })
        .subscribe((response: any) => {
          console.log(`Author with ID ${authorId} has been deleted.`);
          alert("author id has been deleted");
          // Remove the deleted author from the array
          this.bookAuthors = this.bookAuthors.filter(author => author.id !== authorId);
        }, (error: any) => {
          console.error(`Error deleting author with ID ${authorId}: ${error}`);
        });
    } else {
      console.log("Delete operation canceled");
    }
  }
 
  
  openUpdateForm(author: any) {
    const dialogRef = this.dialog.open(UpdateAuthorFormComponent, {
      width: '500px',
      
      data: { author: author }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllBookAuthors();
    });
  }
  openGetByNameDialog(authorName: string) {
    const dialogRef = this.dialog.open(GetByNameComponent, {
      width: '500px',
      data: { name: authorName }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result here if needed
      console.log('The dialog was closed');
      // this.router.navigate(['/book-authors-list']);
    });
  }


  // exportToExcel() {
  //   // Create a new workbook
  //   const workbook = XLSX.utils.book_new();
  
  //   // Format the date
  //   const formattedData = this.bookAuthors.map(author => ({
  //     ...author,
  //     birthdate: formatDate(author.birthdate, 'MM/dd/yyyy', 'en-US'),
      
  //   }));
  
  //   // Create a worksheet
  //   const worksheet = XLSX.utils.json_to_sheet(formattedData);
    
    
  //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Authors');
  
  //   // workbook.add_worksheet('Image')

   
  //   // worksheet['set_margins'](top=1.3)

  //   // worksheet['set_header']('&L&[Picture]&C&16&"Calibri,Bold"Revenue Report',
  //   //                  {'image_left': 'python-200x80.png'})

             
    
 
  
  //   // Generate a binary string from the workbook
  //   const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
  //   // Convert the buffer to a Blob
  //   const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
  //   // Save the file using FileSaver.js
  //   saveAs(excelBlob, 'authors.xlsx');
  //   console.log('File downloaded successfully.');
  
  //   }
   
  exportToExcel() {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

  // Format the date
  const formattedData = this.bookAuthors.map(author => ({
    ...author,
    birthdate: formatDate(author.birthdate, 'MM/dd/yyyy', 'en-US'),
  }));

  // Create a worksheet
  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // Set the page margins
  // const marginOptions = { top: 1.3 };
  // worksheet['!margins'] = marginOptions;

  // // Set the header with the image
  // const headerOptions = {
  //   left: '&[Picture]&C&16&"Calibri,Bold"Revenue Report',
  //   image_left: 'C:\\Users\\bvarshit\\Authors\\capgemini.gif', // Replace with the correct path to your logo image
  // };
  // worksheet['!header'] = headerOptions;

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Authors');

  // Generate a binary string from the workbook
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  // Convert the buffer to a Blob
  const excelBlob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  // Save the file using FileSaver.js
  saveAs(excelBlob, 'authors.xlsx');
  console.log('File downloaded successfully.');
  }



  exportToExcelFromJava() {
    const url = 'http://localhost:8080/export/toExcel';
  
    this.http.get(url, { responseType: 'arraybuffer' }).subscribe(response => {
      const dataBlob = new Blob([response], { type: 'application/octet-stream' }); // Specify the appropriate content type for the response data
  
      saveAs(dataBlob, 'book_authors.xlsx');
      console.log('File downloaded successfully.');
    });
  }
  download_CSV() {
    this.http.get('http://localhost:8080/download/toCsv', { responseType: 'arraybuffer' })
      .subscribe(response => {
        const blob = new Blob([response], { type: 'text/csv' });
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'book_authors.csv';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

}


  

