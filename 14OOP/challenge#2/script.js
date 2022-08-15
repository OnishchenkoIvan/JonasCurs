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
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
  this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.addSpeed();
ford.addSpeed();
ford.lowSpeed();
ford.speedUS = 50;
console.log(ford);

