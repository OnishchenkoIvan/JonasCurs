'use strict';

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
}
const bmw = new Car('BMW', 120);
const mers = new Car('Mersedess', 95);

Car.prototype.addSpeed = function () {
  this.speed += 10;
  console.log(`${this.mark} is going at ${this.speed} km/h`);
};
Car.prototype.lowSpeed = function () {
  this.speed -= 5;
  console.log(`${this.mark} is going at ${this.speed} km/h`);
}

console.log(bmw, mers)

bmw.addSpeed()
bmw.addSpeed()
bmw.lowSpeed()
bmw.addSpeed()
mers.lowSpeed()
console.log(bmw, mers)
