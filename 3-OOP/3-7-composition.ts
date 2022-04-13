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
  
      public constructor(coffeeBeans: number,  private milk: MilkFrother,
        private sugar: SugarProvider) {
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
        const coffee = this.extract(shots);
        const sugarAdded = this.sugar.addSugar(coffee)
        return this.milk.makeMilk(sugarAdded)
            }
    }
  
    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }
    interface SugarProvider {
        addSugar(cup: CoffeeCup):CoffeeCup
    }

    // 싸구려 우유 거품기
    class CheapMilkStreamer implements MilkFrother {
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
    //고급 우유 거품기
    class FancyMilkSteamer implements MilkFrother {
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
    // 콜드 우유 거품기
    class ColdMilkSteamer implements MilkFrother {
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

    class NoMilk implements MilkFrother {
      makeMilk(cup: CoffeeCup){
        return cup;
      }
    }
    class NoSugar implements SugarProvider {
      addSugar(cup: CoffeeCup){
        return cup;
      }
    }


    //설탕제조기
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
    const noMilk = new NoMilk();


    //Sugar
    const sugar =new SugarMixer();
    const candySugar = new CandySugarMixer();
    const noSugar = new NoSugar();
}