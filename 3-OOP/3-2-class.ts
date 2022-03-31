{
    type CoffeeCup={
        shots:number;
        hasMilk: boolean
    }
    class CoffeeMaker{
        static BEANS_GRAM_PER_SHOT:number =7  //class level로 지정됌 
         coffeeBeansGram: number = 0;
         constructor(coffeeBeans:number){
            this.coffeeBeansGram = coffeeBeans
         }
         makeCoffee(shots: number):CoffeeCup {
            if(this.coffeeBeansGram<shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeansGram -=shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
            return {
                shots,
                hasMilk: false
            }
        }
    }
    const maker = new CoffeeMaker(32)
    console.log(maker)

}