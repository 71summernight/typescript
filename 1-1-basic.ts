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

}