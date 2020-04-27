import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { bookList } from '../bookList';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  BList:bookList[]
  constructor(private obj:AppComponent) {
     this.list()
   }

  ngOnInit(): void {
  }

  list()
  {
    this.BList=this.obj.bookList
  }

}
