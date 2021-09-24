




class cash{
    constructor(name,accno,balance){
    this.name=name;
    this.accno=accno;
    this.balance=balance;

    }
getBalance() {
    return"thebalance is:₹" + this.balance;
}
}
const sreedar = new cash("sreedar",654,890000);
const ravi= new cash("ravi",679,8900000);
const raja= new cash("raja",6549,98765);


console.log(raja.getBalance());

output:
60000 7000000
oops.js:94 the balance is:₹7060000
oops.js:70 90000 600000
oops.js:95 the balance is:₹690000
oops.js:70 40000 900000
oops.js:96 the balance is:₹940000
