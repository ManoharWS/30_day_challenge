console.log("Started programming challenge")
function myFunction(){
  console.log("This is normal function");
}
myFunction(); //we need to call functions by their names to be executed/perfomed.

function myFunction1(a){
  return a*10;
}
myFunction1(10); //we need to call function by passing arguments or else it will return undefined

const car = {
  make:"honda",
  model:"civic",
  year:2013,
  drive:function (){
      console.log(`You are driving ${make}  ${model} ${year}`);
  }
};
car.drive();
