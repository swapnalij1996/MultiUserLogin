import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public User:any;

  

  constructor(private ser :AuthService, private route:Router) { 
     this.getalldata();
  }
  getalldata(){

    this.ser.getvalue().subscribe((res:any)=>{
      console.log(res);
      this.User=res;
    })
  }

  ngOnInit(): void {  

}
onedit(id:any,data:any){
  console.log(id);
  console.log(data);
  this.ser.setvalue(id,data);
  this.route.navigate(['update']);
  

}
}