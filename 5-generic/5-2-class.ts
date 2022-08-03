interface Either<L,R>{
    left: ()=>L;
    right:()=>R;
}

class SimpleEither<L,R> implements Either<L,R>{
    constructor(private leftValue:L, private rightValue:R){}
        left():L{
            return this.leftValue
        }
        right():R{
            return this.rightValue
        }
}

const either = new SimpleEither("E",5);

either.left();
either.right()
const best = new SimpleEither({name:'hyunjin'},'hello')
console.log(best)