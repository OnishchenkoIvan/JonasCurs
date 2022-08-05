'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer () {
    const options = this.options.join('\n');

    const answer = prompt(`${this.question}\n${options}\n(Write option number)`);
    if (answer >= 0 && answer < 4) {
      this.answers[answer]++;
    } else alert('Put correct answer, please');
    this.displayResults();
    this.displayResults('sting');
  },
  displayResults () {
    if (Array.isArray(this.answers)) {
      console.log(this.answers);
    } console.log(`Poll results are ${this.answers.join(', ')}`);
  }
};

document.querySelector('.poll').addEventListener('click', function () {
  poll.registerNewAnswer();
});

poll.displayResults.call({answers: [5, 2, 3]});
