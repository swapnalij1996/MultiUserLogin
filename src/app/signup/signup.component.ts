import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 public myForm:any
 public isSubmitted:boolean=false;

  constructor( private fb : FormBuilder ,private ser: AuthService ,private routr: Router) { 
    this.myForm=this.fb.group({
      name: ['',[Validators.required]],
      age: ['',[Validators.required]],
      empId: ['',[Validators.required]],
      branch: ['',[Validators.required]],
      role: ['',[Validators.required]]

     })
  }


  ngOnInit(): void {
    
  }

  onsubmit(){
    console.log(this.myForm.value);
    this.ser.postdata(this.myForm.value).subscribe((res:any)=>{
      console.log(res);
    })
    this.isSubmitted=true;

    this.routr.navigate(['login']);

  }

  get f(){
    return this.myForm.controls;
  }
}

  
