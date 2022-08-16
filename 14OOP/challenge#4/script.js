'use strict';

class CarCl {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
  }

  addSpeed() {
    this.speed += 10;
    console.log(`${this.mark} is going at ${this.speed} km/h`);
  };

  lowSpeed() {
    this.speed -= 5;
    console.log(`${this.mark} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge;

  constructor(mark, speed, charge) {
    super(mark, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  addSpeed() {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.mark} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
    return this;
  };

}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian.addSpeed().addSpeed().addSpeed().lowSpeed().chargeBattery(50).addSpeed();
console.log((rivian.speedUS));