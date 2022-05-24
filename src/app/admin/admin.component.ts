import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public values:any;
  constructor( private ser: AuthService, private ro :Router) {
    
    this.getalldata()
   }
   getalldata(){
    this.ser.getdata().subscribe((res:any)=>{
      console.log(res);
      this.values=res;
    })
   }
  ngOnInit(): void {}
  oneditdata(id:any,value:any){
    
    this.ser.setvalue(id,value);
    this.ro.navigate(['update']); 
  }
  ondelete(id:any){
    let set = confirm('Are you sure you want to delete??');
    if(set === true){
      this.ser.deletedata(id).subscribe((res)=>{
        console.log(res);
        if(this.values.length>0){
          this.getalldata();
        }
      })


    }
  }
}



  
  


  




