import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public id:any=new BehaviorSubject('');
  public data:any=new BehaviorSubject('')
   public newid= this.id.asObservable();
   public newdata=this.data.asObservable();

  constructor( private http : HttpClient) { }
  
  getdata(){
    return this.http.get('http://localhost:3000/api/getAllCourses')
  }

  postdata(us:any){
    return this.http.post('http://localhost:3000/api/insertCourses',us)
  }

  deletedata(id:any){
    return this.http.delete('http://localhost:3000/api/deleteCourses/:id'+id)
  }
//  ----------------------------------------------------------------------------------------------------------------------------
setvalue(id:any,data:any){
  this.id.next(id);
  this.data.next(data);
}
getvalue(){
  return this.newid, this.newdata
}


  editdata(id:any,data:any){
    return this.http.put('http://localhost:3000/api/updateCourses/'+id,data)
  }
}
