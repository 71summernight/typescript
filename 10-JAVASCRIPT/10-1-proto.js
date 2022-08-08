const x = {

}
const y = {

}

console.log(x)
console.log(y)
console.log(x.toString())
console.log(x.__proto__ === y.__proto__)

const array = [];
console.log(array);

function CoffeeMachine(beans) {
    this.beans = beans;
    // this.makeCoffee = (shots) => {
    //     console.log('making....')
    // }
}
//Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making....')
}

const machine1  = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(22);
machine1.makeCoffee(33)
console.log(machine2)
function CoffeeMachine(beans) {
    this.beans = beans;
    // this.mackMachine = (shots) => {
    //     console.log('making....')
    // }
}

function LatteMachine(milk) {
    this.milk = milk
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype)
const latteMachine  = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee()