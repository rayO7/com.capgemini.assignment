export class ProductInfo{
    prodId:number;
    prodName:string;
    prodCost:number;

    constructor(id:number, name:string, cost:number)
    {
        this.prodId=id
        this.prodName=name
        this.prodCost=cost
    }
}