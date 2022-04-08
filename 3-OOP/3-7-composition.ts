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
      
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level
  
      public constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans);
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
  
      private extract(shots: number): CoffeeCup {
        console.log(`Pulling ${shots} shots... ☕️`);
        return {
          shots,
          hasMilk: false,
        };
      }
  
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
  
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    pro.makeCoffee();


    class CaffeLatteMachine extends CoffeeMachine{ 
    constructor(beans: number,  public readonly serialNumber:string, private milkFother: MilkFother){
        super(beans);
    }   
    makeCoffee(shots:number):CoffeeCup{
        const coffee = super.makeCoffee(shots)  
        return this.milkFother.makeMilk(coffee)
    }
    

}
    class SweetCoffeeMaker extends CoffeeMachine{
        constructor(private beans: number, private sugar:SugarProvider){
            super(beans)
        }
        makeCoffee(shots: number):CoffeeCup {
            const coffee = super.makeCoffee(shots)
        return this.sugar.addSugar(coffee)
            
        }
    }

    

 
const machine= new CoffeeMachine(23);

    interface MilkFother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }
    interface SugarProvider {
        addSugar(cup: CoffeeCup):CoffeeCup
    }

    class SweetCaffeLatteMachine extends CoffeeMachine{
     constructor(private beans:number, private milk:MilkFother, private sugar:SugarProvider){
         super(beans)
     }
     makeCoffee(shots: number): CoffeeCup{
         const coffee = super.makeCoffee(shots)
         return this.milk.makeMilk(this.sugar.addSugar(coffee))
     }
    }
    class CheapMilkStreamer implements MilkFother {
        private steamMilk():void{
            console.log('Steam some milk...')
        }
        makeMilk(cup:CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk:true,
            }

        }
    }
    class FancyMilkSteamer implements MilkFother {
        private steamMilk():void{
            console.log('Fancy Steam some milk...')
        }
        makeMilk(cup:CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk:true,
            }

        }
    }
    class ColdMilkSteamer implements MilkFother {
        private steamMilk():void{
            console.log('Cold Steam some milk...')
        }
        makeMilk(cup:CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk:true,
            }

        }
    }
    class CandySugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar from candy')
            return true
        }
        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar:true,
            }

        }
    }
    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar from jar!!!!!')
            return true
        }
        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar:true,
            }

        }
    }
    //Milk
    const cheapMilkMaker = new CheapMilkStreamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkSteamer = new ColdMilkSteamer();

    //Sugar
    const sugar =new SugarMixer();
    const candySugar = new CandySugarMixer();


    const SweetCandyMachine = new SweetCoffeeMaker(12,candySugar)
    const SweetMachine = new SweetCoffeeMaker(12,sugar)

    const latteMachine1 = new CaffeLatteMachine(12,'SS',cheapMilkMaker)
    const latteMachine2 = new CaffeLatteMachine(12,'SS',coldMilkSteamer)
    const sweetLatteeMachine = new SweetCaffeLatteMachine(12,cheapMilkMaker,candySugar)
  }
  