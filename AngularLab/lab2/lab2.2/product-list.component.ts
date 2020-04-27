import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../ProductInfo';
import { ActivatedRoute } from '@angular/router';
import  *  as  data  from  './data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  PList:ProductInfo[]=[]
  id:number
  constructor(private router:ActivatedRoute) {
    this.add()
    router.params.subscribe(params =>{this.id=params['id']})

    if(this.id != undefined)
    {
      let id= this.id
      this.PList=this.PList.filter(function(user)
      {
          return user.prodId == id
      })
    }
   }

   add()
   {
     this.PList.push(new ProductInfo(105,"ray9",1111))
     this.PList.push(new ProductInfo(102,"ray1",1234))
     this.PList.push(new ProductInfo(103,"ray5",9876))
   }

   sortID()
   {
     this.PList.sort(function(a, b)
     {
        return a.prodId-b.prodId
     })
   }

   sortNAME()
   {
     this.PList.sort(function(a,b)
     {
       var n1=a.prodName.toLowerCase
       var n2=b.prodName.toLowerCase

       if(n1>n2)
         return 1

       if(n1<n2)
         return -1

       return 0
     })
   }

   sortCOST()
   {
     this.PList.sort(function(a, b)
     {
        return a.prodCost-b.prodCost
     })
   }

  ngOnInit(): void {
  }

}
