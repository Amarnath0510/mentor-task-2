 class car{
     constructor(wheels,doors,engine){
         this.wheels=wheels;
         this.doors=doors;
         this.engine=engine;
     }
 }

 const ferrari = new car(4,2,"v12");
 
 console.log(ferrari);
 console.log(typeof ferrari,typeof car);
 const venue= new car(4,4,"v5");
 const bmw= new car(4,4,"v8");
 const landcruiser= new car(4,4,"v8");
 console.log(venue);
 console.log(bmw);
 console.log(landcruiser);
 console.log(ferrari.wheels);

class bike{
    constructor(model,wheels,topspeed){
        this.model=model;
        this.wheels=wheels;
        this.topspeed=topspeed;
    }
}
const bajaj = new bike("pulsar",2,180);
const herohonda=new bike("cd-deluxe",2,150);
const tvs = new bike("scooty pep+",2,87);
console.log(bajaj);
console.log(herohonda);
console.log(tvs);

class laptop{
    constructor(battery,price,warranty){

    this.battery = battery;
    this.price=price;
    this.warranty=warranty;
    }
    getwarranty(){
        return "the warranty is:" + this.warranty;
    }
    
}


const dell = new laptop("6500mah",65000,"2years");
const hp = new laptop("5600mah",89000,"5years");
const avita = new laptop("9000mah",38000,"2years");

console.log(dell);
console.log(hp);
console.log(avita);




class account{
    constructor(name,accno,balance){
        this.name=name;
        this.accno=accno;
        this.balance=balance;
    }
    getBalance(){
        return "the balance is:₹"+this.balance;
    }
    deposit(amount){
        console.log(amount,this.balance);
          if(this.balance>=amount){
              this.balance=this.balance+amount;
              return  this.getBalance();
              
          }else{
              return "not credited";
    
          }
    
    }
    
    }


    

const amar = new account("amar",345,600000);
const vishwa = new account("vishwa",567,900000);
const shanthi= new account("shanthi",998,7000000);




console.log(shanthi.deposit(60000));
console.log(amar.deposit(90000));
console.log(vishwa.deposit(40000));



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