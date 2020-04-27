import { Injectable } from '@angular/core';
import list from 'src/app/books.json';
import { bookList } from './bookList';

@Injectable({
  providedIn: 'root'
})


export class MyService1Service {
  BList:bookList[]=list
  id:number
  name:string

  constructor() { }

  display(id:number)
  {
    for(let i=0;i<this.BList.length;i++)
    {
      if(this.BList[i].id==id)
      {
        this.id=this.BList[i].id
        this.name=this.BList[i].name
        break
        
      }
    }
  }

  getName()
  {
   return this.name 
  }

  getId()
  {
    return this.id
  }

}

