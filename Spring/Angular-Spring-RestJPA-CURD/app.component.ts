import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { Info } from './Info';
import { Student } from './Student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnguLarExpResS';

  //------------------------------------
  // id1:string;
  // name1:string
  // price1:string
  // list:Info[]
  // ObjectString:string
  //-------------------------------------

    fname:string
    lname:string
    email:string
    StudentList:Student[]
    stu:string

  constructor(private configService:ConfigService){}

  //------------------------------------
  //1.PRODUCT LIST FROM ANGULAR TO SPRING REST 
  // OnSubmit()
  // {
  //     this.configService.isValidUser("http://localhost:8080/displayAll?id="+this.id1+"&name="+this.name1+"&price="+this.price1).subscribe(
  //     data => {alert("INFO ----> Added")})}
  // }
  //------------------------------------

  addStudent()
  {
    this.configService.addStudent("http://localhost:8080/employees/add?firstName="+this.fname+"&lastName="+this.lname+"&email="+this.email).subscribe(
      data =>{
        alert("Data Added")
      } )}

  showStudent()
  {
    this.configService.showStudent("http://localhost:8080/employees/list").subscribe(
      data=>{
          this.StudentList=data
          // for(var i=0;i<this.StudentList.length;i++)
          // {
          //   this.stu="id--> "+this.StudentList[i].id+" Name--> "+this.StudentList[i].firstname+" "+this.StudentList[i].lastname+" Email--> "+this.StudentList[i].email;
          //   console.log(this.stu)
          // }
          
      }
    )
  }

  updateStudent(id:string)
  {
   // this.configService.updateStudent("http://localhost:8080/employees/update?id=6&firstName=john&lastName=synus3&email=john@gmail.com")
  }
  deleteStudent(id:number)
  {
    this.configService.deleteStudent("http://localhost:8080/employees/delete?id="+id).subscribe(
      data=>{
        this.StudentList=data
      }
    )
  }





































}