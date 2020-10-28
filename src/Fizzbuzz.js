export default class Fizzbuzz {
  fizzbuzz(num) {
    if (num % 3 === 0)
    return "Fizz"
    else if (num === 5)
    return "Buzz"
    else
    return num
  }
};