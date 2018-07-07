var meth = /** @class */ (function () {
    function meth() {
    }
    meth.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    return meth;
}());
var mymeth = new meth();
mymeth.firstName = 'krishna';
mymeth.lastName = 'chaitanya';
console.log(mymeth.getName());
