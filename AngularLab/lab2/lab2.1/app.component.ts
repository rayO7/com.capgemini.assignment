import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeInfo} from './EmployeeInfo';
import { MyService1Service } from './my-service1.service';
import { ProductInfo } from './ProductInfo';
import { bookList } from './bookList';
import { Child1Component } from './child1/child1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ray-app';
  //name1:string;
  // id:string;
  // name1:string;
  // basic:string;
  // hra:string;
  // da:string;
  // deduc:string;
  // tax:string;
  // sum:Number;
  // ProductId:string;
  // ProfuctName:string;
  // ProductCost:number;
  // namesArray=['ray', 'love', 'mahi'];
  //  name1:string;
  //  data="DONt TaLK TO ME";
  // data:number=1234;

  name1:string;
  id1:string;
  dept:string;
  salary:number;
  // data:string="raypopo"
  EmployeeList: EmployeeInfo[]=[];
  // enter:string;
  // id1:string;
  // id1:number
  // id2:number
  // name2:string
  //products: any = (data as any).default;
  // bookList:any[]

  addEmployee()
  {
    this.EmployeeList.push(new EmployeeInfo(this.id1,this.name1, this.dept, this.salary))
  }

  // obj:bookList
  
  //  dbService=new MyService1Service()
   constructor()
   {

   }

  

  //  display()
  //  {
  //     this.dbService.display(this.id1)
  //     this.id2=this.dbService.id
  //     this.name2=this.dbService.name
  //  }

  //  displayAll()
  //  {
  //    this.bookList=this.dbService.BList
  //  }

  // display()
  // {
  //   this.id1
  // }

  // isSpecial(enter:string)
  // {

  // }

//   test()
// {
//   this.sum=parseInt(this.basic)+parseInt(this.da)+parseInt(this.hra)-(parseInt(this.deduc)+parseInt(this.tax));
//   alert("hello, Submitted "+this.name1+this.id+`${parseInt(this.basic)+parseInt(this.da)+parseInt(this.hra)-(parseInt(this.deduc)+parseInt(this.tax))}`);
  
// }

// addNames()
// {
//   this.namesArray.push(this.name1);
//   console.log(this.namesArray);
// }

// addName()
// {
//   return "Your name is saved";
// }

// showName()
// {
//   alert("Name :"+this.name1);
// }

// getSum()
// {
//   return parseInt(this.basic)+parseInt(this.da)+parseInt(this.hra)-(parseInt(this.deduc)+parseInt(this.tax));
// }

// submitting()
// {
  
// }

displayNames(name:string)
{
  alert("Tell your name..."+name);
}

}


