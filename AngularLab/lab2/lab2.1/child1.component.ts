import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeInfo } from '../EmployeeInfo';
import { AppComponent } from '../app.component';
import { MyService1Service } from '/Users/ray/ray-app/src/app/my-service1.service';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
   @Input() eList:EmployeeInfo[];

  //@Output() outputObj=new EventEmitter();
  //data:string;

  id1:string;
  name1:string;
  dept:string;
  salary:number;
  // name2:string
  // id2:number


  constructor(private obj:AppComponent) {
    // this.name2=obj.name2
    // this.id2=obj.id2
   }

  ngOnInit(): void {
  }

  

  // sendData()
  // {
  //   this.outputObj.emit(this.data);
  // }

  updateEmployee()
  {
    
    for(let i=0;i<this.eList.length;i++)
    {
      const emp=this.eList[i]

      if(emp.EmployeeId==this.id1)
      {
        this.eList.splice(i, 1)
        emp.EmployeeId=this.id1
        emp.EmployeeDept=this.dept
        emp.EmployeeName=this.name1
        emp.EmployeeSalary=this.salary
        this.eList.push(emp)
        break
      }
    }

  }

  deleteEmployee(emp:EmployeeInfo)
  {
      
    var index = this.eList.indexOf(emp);
    this.eList.splice(index, 1);       
  }

}
