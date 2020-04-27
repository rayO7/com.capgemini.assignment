import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { Info } from './Info';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) {

  }

    ////1.PRODUCT LIST FROM ANGULAR TO SPRING REST 
    // isValidUser(str:string):Observable<any>
    // {
    //   return this.http.get<any>(str);
    // }



    addStudent(str:string):Observable<any>
    {
      return this.http.get<any>(str);
    }

    showStudent(str:string)
    {
      return this.http.get<any>(str);
    }

    updateStudent(str:string)
    {
      return this.http.get<any>(str);
    }

    deleteStudent(str:string)
    {
      return this.http.get<any>(str);
    }
}
