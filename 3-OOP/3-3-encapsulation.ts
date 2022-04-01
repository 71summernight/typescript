{
    type CoffeeCup={
        shots:number;
        hasMilk: boolean
    }
    interface CoffeeMaker{
        makeCoffee(shots:number):CoffeeCup
    }
    interface CommercialCoffeeMaker {
        makeCoffee(shots:number): CoffeeCup
        fillCoffeeBeans(beansL :number):void
        clean():void
    }

    class CoffeeMachine implements CoffeeMaker,CommercialCoffeeMaker{
        private static BEANS_GRAM_PER_SHOT:number =7  //class level로 지정됌 
         private coffeeBeansGram: number = 0;
         constructor(coffeeBeans:number){
            this.coffeeBeansGram = coffeeBeans
         }
         static makeMachine(coffeeBeans: number):CoffeeMachine{
             return new CoffeeMachine(coffeeBeans)
         }

          fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeansGram +=beans
         }
         clean(): void {
             console.log('cleaning the CoffeeMachine....')
         }
         private grindBeans(shots){
             console.log( `grinding beans for ${shots}`);
             if(this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
                throw new Error (`Not enough coffee beans!`)
             }
             this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
         }
         private preheat(): void{
             console.log('heating up...')
         }

         private extract(shots: number):CoffeeCup{
             console.log(`pulling ${shots}....shots...`)
             return {
                 shots,
                 hasMilk:false,
             }
            }

         makeCoffee(shots: number):CoffeeCup {
           this.grindBeans(shots);
           this.preheat();
           return this.extract(shots)
            // if(this.coffeeBeansGram<shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
            //     throw new Error('Not enough coffee beans!');
            // }
            // this.coffeeBeansGram -=shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
            // return {
            //     shots,
            //     hasMilk: false
            // }
        }
    }
    const maker :CoffeeMachine= CoffeeMachine.makeMachine(32)
    maker.fillCoffeeBeans(30)
    maker.fillCoffeeBeans(20)
    console.log(maker)    
    const maker2 :CommercialCoffeeMaker= new CoffeeMachine(32)
    maker2.fillCoffeeBeans(30)
    maker2.makeCoffee(2)
    maker2.clean()
    console.log(maker2)    

}