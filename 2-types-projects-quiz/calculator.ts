type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'
function caclulator(how:Command, num1:number,num2:number) :number{
    switch(how){
        case 'add':
        return num1+ num2;
        case 'substract':
            return num1-num2
        case 'multiply':
            return num1*num2
        case 'divide':
            return num1 / num2
        case 'remainder':
            return num1 % num2
    default:
        throw new Error('unkown command')
    }

}
console.log(caclulator('add',1,3))
console.log(caclulator('substract',3,1));
console.log(caclulator('multiply',4,2))
console.log(caclulator('divide',4,2))
console.log(caclulator('remainder',5,2))