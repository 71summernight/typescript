interface Stack1<T> {
    readonly size:number;
    push(value:T):void;
    pop():T;
}

type StackNode1<T> = {
    readonly value:T;
    readonly next?: StackNode1<T>;
}



class StackImpl1<T> implements Stack1<T> {
    private _size:number=0;
    private head?: StackNode1<T>
    constructor(private capacity: number){

    }


    get size(){
        return this._size
    }
    push(value:T){
        if(this.size === this.capacity){
            throw new Error("Stack is full")
        }
        const node = {value,next: this.head}
        this.head = node;
        this._size++;
    }
    pop():T {
        if(this.head == null){
            throw new Error('Stack is empty!')
        }
        const node = this.head
        this.head = node.next;
        this._size--;
        return node.value
    }
}


const stack = new StackImpl1<String>(10);
stack.push('Ellie 1')
stack.push('Bob 2')
stack.push('Steve 3')
stack.push('Hyunjin 7')
stack.push('Hyunjin 7')
stack.push('Hyunjin 7')
stack.push('Hyunjin 7')
stack.push('Hyunjin 7')
stack.push('Ellie 1')
stack.push('Bob 2')
stack.push('Steve 3')
stack.push('Hyunjin 7')
stack.push('Hyunjin 7')
stack.push('Hyunjin 7')
stack.push('Hyunjin 7')
stack.push('Hyunjin 7')

const stack2 = new StackImpl1<number>(10);
stack2.push(12312)
stack2.push(3232)
while(stack.size !== 0 ){
    console.log(stack.pop())
}

