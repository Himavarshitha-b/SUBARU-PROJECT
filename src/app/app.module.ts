import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAuthorComponent } from './bookauthor/bookauthor.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookAuthorListComponent } from './book-authors-list/book-authors-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateAuthorFormComponent } from './update-author-form/update-author-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './AuthenticationService';
import { LogoutComponent } from './logout/logout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddbookauthorComponent } from './addbookauthor/addbookauthor.component';
import { DataComponent } from './data/data.component';
import { MatButtonModule } from '@angular/material/button';
import { GetByNameComponent } from './get-by-name/get-by-name.component';
import { DataAPIComponent } from './data-api/data-api.component';


@NgModule({

  declarations: [
    AppComponent,
    BookAuthorComponent,
    BookAuthorListComponent,
    UpdateAuthorFormComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    AddbookauthorComponent,
    DataComponent,
    GetByNameComponent,
    DataAPIComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule ,
    HttpClientModule ,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],

  entryComponents: [
    GetByNameComponent,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
