import { Component, OnInit } from '@angular/core';
//import {detailsStudent} from '../Model/detailsStudent.Model';
import {apiService }from '../Services/api.service';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  firstName:string;  
  ageStu:number;
  rollNo:number;
  date:number;
  gender:boolean=false;
  email:string;
  registerForm:FormGroup;
  submitted:boolean=false;
  
  constructor(private service:apiService, private routes:Router , private fb:FormBuilder) { }

  ngOnInit(
  
  ): void {
    this.registerForm = this.fb.group({
      first_Name: ["", [Validators.required,Validators.min(10)]],
      email_1: ["", [Validators.required,Validators.email]],
      age_1: ["", Validators.required],
      roll_no: ["", Validators.required],
      date_1: ["", Validators.required],  
    });
  }
  
  genderF(x:string){
    
    if(x==='Male'){
      this.gender=true;
    }
    else{
      this.gender=false;
    }
  }

  // form validation

  addDetails(){
    const data={
      rollNo: this.rollNo,
      name: this.firstName,
      email:this.email,
      age:this.ageStu ,
      date:this.date ,
      isMale:this.gender ,
    }

    //console.log(this.student);
    this.service.addstudentAPI(data).subscribe(res=>{
      console.log(res);
      this.routes.navigate(["/disp-student"]);

    })

  }
  click(){
    this.registerForm.markAsUntouched();
    this.submitted = true;
  }
  

}
