import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookauthorService } from '../bookauthor.service';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-update-author-form',
  templateUrl: './update-author-form.component.html',
  styleUrls: ['./update-author-form.component.css']
})
export class UpdateAuthorFormComponent {
  bookauthor: any = {
    name: '',
    birthdate: '',
    nationality: '',
    yearOfPublication: '',
    yearOfPublicationInWords:'',
    bookName: ''
  };
  id?: number;

  constructor(
    public dialogRef: MatDialogRef<UpdateAuthorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookauthorService: BookauthorService,
    private router: Router
  ) { }
    
  ngOnInit(): void {
    if (this.data && this.data.author) {
      this.id = +this.data.author.id;
      this.getBookAuthor(this.id);

    }
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
  
    $('#update-book-author').validate({
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
        updateButton: {
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
        updateButton: {
          required: 'Add button is required'
        }
      }
    });
    // $.validator.messages.lettersOnly = 'Please enter letters only';
  }
  
  
  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/logout']);
  }

  updateAuthor(): void {
    if ($('#update-book-author').valid()) {
    if (this.id) {
      this.bookauthorService.updateBookAuthor(this.id.toString(), this.bookauthor)
        .subscribe(() => {
          console.log('Author updated successfully');
          alert('Author updated successfully');
          this.dialogRef.close();
          // location.reload();
          this.router.navigateByUrl('book-authors-list');
          
        }, (error: any) => {
          console.log('Error updating author', error);
          alert('Error updating author');
        });
    } else {
      alert('Invalid author ID');
    }
  } 
  }
  getBookAuthor(id: number) {
    this.bookauthorService.getBookAuthor(id.toString())
      .subscribe((result: any) => {
        this.bookauthor = {
          name: result.name,
          birthdate: result.birthdate,
          nationality: result.nationality,
          yearOfPublication: result.yearOfPublication,
          bookName: result.bookName
        };
      }, (error: any) => {
        console.log('Error retrieving author data', error);
        alert('Invalid author ID');
      });
  }
}
