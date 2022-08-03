Array;

type Student = {
    passed:boolean,
}
const students:Student[] = [{passed: true}, {passed: true},{passed: false}]
const result = students.every(student => {student.passed})
console.log(result);

class Animals {}
class Cat extends Animals {
    isCat: boolean =true;
}
class Dog extends Animals {
    isDog: boolean =true;
}
const animals: Animals[] = [new Cat(), new Cat(), new Cat()]
function isCat(animals: Animals): animals is Cat {
    return (animals as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
