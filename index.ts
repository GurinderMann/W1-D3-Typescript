abstract class LavoratoreAutonomo {
    constructor(
        protected age: number, 
        protected redditoannuolordo: number
        ) {}
  
    abstract getTasselnps(): number;
    abstract getTasselrpef(): number;
    abstract codredd(): number;
  
    getUtileTasse() {
      return this.getTasselnps() + this.getTasselrpef() + this.codredd();
    }
  
    getRedditoAnnuoNetto() {
      return this.redditoannuolordo - this.getUtileTasse();
    }
  }
  
  class LavoratoreAutonomo1 extends LavoratoreAutonomo {
    getTasselnps() {
      if (this.age <= 21) {
        return this.redditoannuolordo * 0.22; 
      } else {
        return this.redditoannuolordo * 0.24;
      }
    }
  
    codredd() {
      const coefficienteRedditivita = 0.78;
      const imposta = this.redditoannuolordo * coefficienteRedditivita * 0.15;
      return imposta; // Return only the calculated tax amount
    }
  
    getTasselrpef() {
      if (this.redditoannuolordo <= 15000) {
        return this.redditoannuolordo * 0.23;
      } else if (this.redditoannuolordo <= 28000) {
        return this.redditoannuolordo * 0.25;
      } else if (this.redditoannuolordo <= 50000) {
        return this.redditoannuolordo * 0.35;
      } else {
        return this.redditoannuolordo * 0.43;
      }
    }
  }
  
  const pippo = new LavoratoreAutonomo1(19, 9000);
  console.log("Reddito netto Pippo:", pippo.getRedditoAnnuoNetto());
  
  const mario = new LavoratoreAutonomo1(27, 120000)
  console.log("Reddito netto Mario:", mario.getRedditoAnnuoNetto())