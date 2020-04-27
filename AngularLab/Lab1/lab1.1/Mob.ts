class Mobile
{
    mobileId:number;
    mobileName:string;
    mobileCost:number;
    constructor(mobileid:number,mobilename:string,mobilecost:number)
    {
        this.mobileId=mobileid;
        this.mobileName=mobilename;
        this.mobileCost=mobilecost;

    }
    printMobileDetail():void
    {
        console.log("the mobile id:"+this.mobileId);
        console.log("the mobile name:"+this.mobileName);
         console.log("the mobile cost is:"+this.mobileCost);
    }
}

class BasicPhone extends Mobile
{
    mobileType:string;
    constructor (mobileid:number,mobilename:string,mobilecost:number,mobiletype:string)
    {
     super(mobileid,mobilename,mobilecost);
     this.mobileType=mobiletype;
     console.log("the mobile type is:"+this.mobileType);
    }
    
    
}


class SmartPhone extends Mobile
{
    mobileType:string;
    constructor (mobileid:number,mobilename:string,mobilecost:number,mobiletype:string)
    {
     super(mobileid,mobilename,mobilecost);
     this.mobileType=mobiletype;
     console.log("the mobile type is:"+this.mobileType);
    }
    
}
let b=new BasicPhone(1,"Nokia",20000,"basic");
b.printMobileDetail();
let s=new SmartPhone(2,"Apple",100000000,"Smart");
s.printMobileDetail();