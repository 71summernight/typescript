function addNumbers(...numbers:number[]) :number {
    return numbers.reduce((a,b)=>a+b)
}
console.log(addNumbers(1,2,3,4,5,20))


{
    // Array에는 정의법 2가지
    const fruits: string[]=['사과','바나나','배'];
    const scores: Array<number> = [1,2,3,4];

    function printArray(fruits: readonly string[]){ 
        //readonly는 string[] <-이런타입만 됌
    }

    // Tuple (사용 권장하지 않아요) 인덱스로 정의하는거 가독성 떨어짐 ->왠만하면 interface,type alias,class로 하는것이 좋음
    let student: [string,number];
    student=['name',123]
    console.log(student[0])
    const [name,age]=student;    
}

{
    // Type Aliases
    type Text=string;
    const name: Text ='hyunjin';
    const address:Text='korea';
    type Num= number;
    type Student ={
        name:string;
        age: number;
    }
    const student : Student ={
        name:'hyunjin',
        age:20
    }
    //String Literal Types
    type Name="name";
    let hyunjinName: Name;
    hyunjinName = 'name'

    type JSON = 'json'
    const json:JSON='json'

}

{
// Union Types : Or
type Direction = 'left' | 'right' | 'up' | 'down'
function move(direction: Direction){
    console.log(direction);
}
move('down')
type TileSize = 8 | 16 | 32
const title: TileSize = 16

type SuccessState={
    result:"success"
    response:{
        body:string;
    }
}
type FailState={
    result:"fail"
    reason: string
}
type LoginState = SuccessState | FailState
function login():LoginState {
    return{
        result:"success",
        response: {
            body: '축하표시 성공'!
        }
    }
}
// 별로 안좋은 코드
function printLoginState(state:LoginState){
    if( state.result ==='success'){
        console.log(`축하표시 ${state.response.body}`)
    }else {
        console.log(`우는표시! ${state.reason}`)
    }
}
//Discriminated Union


// interSection  :and & 개념

type Student ={
    name: string;
    score:number;
}
type Worker = {
    empolyeeId: number;
}

function internWork(person: Student & Worker){
    console.log(person.name,person.empolyeeId)
}
internWork({
    name:'hyunjin',
    score:1,
    empolyeeId:1123,

})

//enum
//JavaScript 
const MONDAY = 0;
const TUESDAY = 1;
const WEDNESDAY = 2;
const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY" : 1, "WEDNESDAY": 2})
const dayOfToday= DAYS_ENUM.WEDNESDAY;

//TypeScript
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday   
}

console.log(Days.Thursday)
const day=Days.Saturday
console.log(day)

//enum은 타입추론이 안되기 때문에 typescript에서 안쓰는게 더 좋음 
//대신에 unionType활용해 볼 수 있다.
type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
let dayOfWeek: DaysOfWeek ='Sunday'

}

//Type Inference 타입추론
{
    let text = 'hello';
    function print(message: string){
        console.log(message);
    }
    print('hello');
    //print(1)

    function add(x:number,y:number){
        return x+y
    }

    const result = add(1,2)

}

//Type Assertions
{
    function jsStrFunc(): any {
        return 2
    }
const result=jsStrFunc();
console.log((result as string).length)
console.log((<string>result).length)
const wrong: any =5;
console.log((wrong as Array<number>).push(1));



}
