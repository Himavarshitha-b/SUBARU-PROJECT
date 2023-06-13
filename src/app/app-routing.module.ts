import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAuthorComponent } from './bookauthor/bookauthor.component';
import { BookAuthorListComponent } from './book-authors-list/book-authors-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DataComponent } from './data/data.component';
import { DataAPIComponent } from './data-api/data-api.component';

const routes: Routes = [
  { path: 'bookauthor', component: BookAuthorComponent, },
  {path:'book-authors-list',component:BookAuthorListComponent},
  {path:'login',component:LoginComponent},
  { path: 'register', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent},
   {path:'data',component: DataComponent},
   {path:'dataCsv',component: DataAPIComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
