/* Prompt
Method chaining is a very interesting way to keep your program clean.

As a part of this Kata, you need to create functions such that one could evaluate the following expression:

(3).add(5).multiply(2)
The above expression evaluates to be 16.

You need to implement the following methods:

add
subtract
multiply
divide
square
After you're done, one could chain these five methods to create chains of almost any length.
*/

// Solution
Number.prototype.add = function (num) {
  return this + num;
};

Number.prototype.subtract = function (num) {
  return this - num;
};

Number.prototype.multiply = function (num) {
  return this * num;
};

Number.prototype.divide = function (num) {
  return this / num;
};

Number.prototype.square = function () {
  return this * this;
};
