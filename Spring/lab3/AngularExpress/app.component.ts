import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { Info } from './Info';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnguLarExpResS';
  id1:string;
  name1:string
  price1:string
  //password:string
  list:Info[]
  ObjectString:string
  //data:Info
  constructor(private configService:ConfigService){
  }

  
  OnSubmit()
  {
    
    this.configService.isValidUser("http://localhost:8080/displayAll?id="+this.id1+"&name="+this.name1+"&price="+this.price1).subscribe(
      data => {
      //   this.list=data;
      // //  this.ObjectString=data
      //   for(var i=0;i<this.list.length;i++)
      //   {
      //     this.ObjectString="UserId: "+this.list[i].id+" Password: "+this.list[i].name+" Price: "+this.price1
      //     console.log(this.ObjectString)
      //   }
        alert("INFO ----> Added")

        
       // console.log(this.ObjectString)
       
      }
    )
  }
}
