{
    type CoffeeCup = {
      shots: number;
      hasMilk ?: boolean;
      hasSugar?: boolean
    };
  
    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }
  
    interface CommercialCoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
      fillCoffeeBeans(beans: number): void;
      clean(): void;
    }
      
    abstract class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level
  
      public constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
      }
  
      clean() {
        console.log('cleaning the machine...🧼');
      }
  
      private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
          throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }
  
      private preheat(): void {
        console.log('heating up... 🔥');
      }
      protected abstract extract(shots: number): CoffeeCup;
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
      }
    }
  
    class AmateurUser {
      constructor(private machine: CoffeeMaker) {}
      makeCoffee() {
        const coffee = this.machine.makeCoffee(2);
        console.log(coffee);
      }
    }
  
    class ProBarista {
      constructor(private machine: CommercialCoffeeMaker) {}
      makeCoffee() {
        const coffee = this.machine.makeCoffee(2);
        console.log(coffee);
        this.machine.fillCoffeeBeans(45);
        this.machine.clean();
      }
    }



    class CaffeLatteMachine extends CoffeeMachine{ 
    constructor(beans: number,  public readonly serialNumber:string){
        super(beans);
    }   
    private steamMilk():void{
        console.log('Steaming some milk....')
    }
    protected extract(shots: number):CoffeeCup {
      this.steamMilk();
      return{
        shots,
        hasMilk: true,

      }
    }

    }

    class SweetCoffeeMaker extends CoffeeMachine{
      protected extract(shots: number):CoffeeCup {
        return{
          shots,
          hasSugar: true,
  
        }
      }
    }

    const machines :CoffeeMaker[]= [
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeeMaker(16)

    ]
    machines.forEach(machine =>{
        console.log('-----------------------------')
        machine.makeCoffee(1)
    })
const latteMachine = new CaffeLatteMachine(23,'2dfs2')
const latte = latteMachine.makeCoffee(1)
console.log(latteMachine.serialNumber)
}
  