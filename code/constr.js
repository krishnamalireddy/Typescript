var detail = /** @class */ (function () {
    function detail(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    detail.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    return detail;
}());
var emp = new detail('krishna', 'chaitanaya');
console.log(emp.getName());
