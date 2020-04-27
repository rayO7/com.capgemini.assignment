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

    isValidUser(str:string):Observable<any>
    {
      return this.http.get<any>(str);
    }
}
