'use strict';

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
}

Car.prototype.addSpeed = function () {
  this.speed += 10;
  console.log(`${this.mark} is going at ${this.speed} km/h`);
};
Car.prototype.lowSpeed = function () {
  this.speed -= 5;
  console.log(`${this.mark} is going at ${this.speed} km/h`);
};

const EV = function (mark, speed, charge) {
  Car.call(this, mark, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.addSpeed = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.mark} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.lowSpeed();
tesla.addSpeed();