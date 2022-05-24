import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:any;
public data:any;
isSubmitted:boolean=false;

  constructor( private fb:FormBuilder, private ro:Router, private ser: AuthService) {
    this.loginForm = this.fb.group({
      name:['',[Validators.required]],
      empId:['',[Validators.required]]
    });
this.getserdata();
 }
    
getserdata(){
  this.ser.getdata().subscribe((res:any)=>{
    console.log(res);
    this.data=res;
  })
}
  ngOnInit(): void {
   }
  submitForm(){
    console.log(this.loginForm.value.name);
    for(let i=0;i<this.data.length;i++){
  
      if((this.loginForm.value.name == this.data[i].name) && (this.data[i].role == 'user')){

         this.ser.setvalue(this.data[i].id,this.data[i]);
         this.ro.navigate(['home']);//home is user compo
 
      }else if (this.loginForm.value.name == this.data[i].name && this.data[i].role == 'admin'){
         this.ser.setvalue(this.data[i].id,this.data[i]);
         this.ro.navigate(['admin']);
      }
    }
    this.isSubmitted =true;
    }
    onSubmit(){ }
  }



