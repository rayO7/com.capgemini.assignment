var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile = /** @class */ (function () {
    function Mobile(mobileid, mobilename, mobilecost) {
        this.mobileId = mobileid;
        this.mobileName = mobilename;
        this.mobileCost = mobilecost;
    }
    Mobile.prototype.printMobileDetail = function () {
        console.log("the mobile id:" + this.mobileId);
        console.log("the mobile name:" + this.mobileName);
        console.log("the mobile cost is:" + this.mobileCost);
    };
    return Mobile;
}());
var BasicPhone = /** @class */ (function (_super) {
    __extends(BasicPhone, _super);
    function BasicPhone(mobileid, mobilename, mobilecost, mobiletype) {
        var _this = _super.call(this, mobileid, mobilename, mobilecost) || this;
        _this.mobileType = mobiletype;
        console.log("the mobile type is:" + _this.mobileType);
        return _this;
    }
    return BasicPhone;
}(Mobile));
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(mobileid, mobilename, mobilecost, mobiletype) {
        var _this = _super.call(this, mobileid, mobilename, mobilecost) || this;
        _this.mobileType = mobiletype;
        console.log("the mobile type is:" + _this.mobileType);
        return _this;
    }
    return SmartPhone;
}(Mobile));
var b = new BasicPhone(1, "Nokia", 20000, "basic");
b.printMobileDetail();
var s = new SmartPhone(2, "Apple", 100000000, "Smart");
s.printMobileDetail();
