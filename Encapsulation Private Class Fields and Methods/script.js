'use strict';

class Account {

  // Public fields (instances)
  locale = navigator.language;

  //  Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //protected property
    this.#pin = pin;
    this.#movements = [];//to make private(not truly)
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Method

  // Public interface
  getMovements(){
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
  

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  static helper() {
    console.log('Helper');
  }


  // Private Methods
  _approveLoan(val){//protected
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#movements);//to check private
// console.log(acc1.#pin);


Account.helper();