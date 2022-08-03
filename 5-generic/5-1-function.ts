{
    function checkNotNullBad(arg:number | null):number{
        if(arg===null){
            throw new Error('not vaild number!')
        }return arg;
    }
    const result = checkNotNullBad(123)
    console.log(result);
    checkNotNullBad(null)

    function checkNotNullAny(arg: any | null):any{
        if(arg==null){
            throw new Error('not valid number!')
        }
        return arg
    }
    const result2 = checkNotNullAny(123)

    function checkNotNull<T>(arg:T|null):T{
        if(arg==null){
            throw new Error('not valid number!')
        }
        return arg
    }
    const number = checkNotNull(123)
    const boolean = checkNotNull(true)

}