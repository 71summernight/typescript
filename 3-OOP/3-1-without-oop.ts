{
    type CoffeeCup={
        shots:number;
        hasMilk: boolean
    }
    const BEANS_GRAMM_PER_SHOT:number =7 
    let coffeeBeansGram: number = 0;
    function makeCoffee(shots: number):CoffeeCup {
        if(coffeeBeansGram<shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeansGram -=shots * BEANS_GRAMM_PER_SHOT
        return {
            shots,
            hasMilk: false
        }
    }
    coffeeBeansGram += 3 * BEANS_GRAMM_PER_SHOT
    const coffee =makeCoffee(2)
    console.log(coffee)

}