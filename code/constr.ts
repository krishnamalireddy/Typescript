class detail{
firstName;
lastName;

constructor(firstName,lastName){
this.firstName =firstName;
this.lastName=lastName;
}
getName(){
return this.firstName +" "+ this.lastName;

}}
var emp = new detail('krishna','chaitanaya');
console.log(emp.getName());