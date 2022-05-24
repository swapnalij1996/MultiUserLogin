import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
public reForm:any;
public my:any;


isSubmitted:boolean=false;
  constructor( private fb:FormBuilder, private dt:AuthService, private rou:Router) {
    this.dt.getvalue().subscribe((res:any)=>{
      console.log(res);
      this.my=res;

    })
    this.reForm=this.fb.group({
      name:[this.my.name,[Validators.required]],
      age:[this.my.age,[Validators.required]],
      empId:[this.my.empId,[Validators.required]],
      branch:[this.my.branch,[Validators.required]],
role:[this.my.role,[Validators.required]]

    })
   }

  ngOnInit(): void {
    
  }
onsubmit(){
  this.dt.editdata(this.my.id,this.reForm.value).subscribe((res:any)=>{
    console.log(res);
    this.isSubmitted=true;
  })
  if(this.reForm.value.role == 'user' && this.my.role == 'user'){

    this.rou.navigate(['login']);

 }else if((this.reForm.value.role == 'admin' || this.reForm.value.role == 'user') && (this.my.role == 'user' || this.my.role == 'admin')){
   this.rou.navigate(['admin']);
 }
  

}
get f(){
  return this.reForm.controls
}
}




