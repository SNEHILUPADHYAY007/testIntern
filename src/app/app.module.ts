import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import {apiService} from './Services/api.service';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
//import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    DisplayStudentComponent,
    ErrorPageComponent,
    NavigationComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
     // {path:'',component:AppComponent},
      {path:'student',component:AddStudentComponent},
      { path: '',   redirectTo: '/student', pathMatch: 'full' },
      {path:'disp-student',component:DisplayStudentComponent},
      {path:'**',component:ErrorPageComponent}
    ]),
    HttpClientModule
    
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
