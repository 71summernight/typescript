{
    type CoffeeCup={
        shots:number;
        hasMilk: boolean
    }
    class CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT:number =7  //class level로 지정됌 
         private coffeeBeansGram: number = 0;
         constructor(coffeeBeans:number){
            this.coffeeBeansGram = coffeeBeans
         }
         fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeansGram +=beans
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
    maker.fillCoffeeBeans(30)
    maker.fillCoffeeBeans(20)
    console.log(maker)    

    class User{
        firstName: string;
        lastName: string;
        get fullName():string{
           return`${this.firstName} ${this.lastName}` 
        }
        private internalAge = 4;
        get age(): number{
            return this.internalAge
        }
        set age(num:number){
            if(num<0){
                throw new Error('should upper than 0')
            }
            this.internalAge = num
        }
        constructor(firstName:string, lastName:string){
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    const user = new User('Steve','Jobs')
    console.log(user.fullName)
    user.firstName = 'hyunjin'
    console.log(user.fullName)
}