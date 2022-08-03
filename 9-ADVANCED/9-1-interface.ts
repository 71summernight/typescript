type PositionType= {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}



const obj1: PositionType = {
    x: 1,
    y: 1,
}
const obj2: PositionInterface = {
    x: 1,
    y: 1,
}

class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
}

interface ZPositionInterface extends PositionInterface {
    z: number;
}
type ZPositionType = PositionType & { z: number }

//interface랑 type랑 차이점
//interface만 merge가 가능 
// x,y 정의후 밑에다 z 정의 추가 가능
// 맨밑에서 x,y,z 사용해야됌 
// type은 duplicate Error 

type Person = {
    name: string,
    age: number,
}

type Name = Person['name']; //string
type NumberType = number;
type Direction = 'left' | 'right'

