export default class Fizzbuzz {
  fizzbuzz(num) {
    if (num % 3 === 0)
      return "Fizz"
    else if (num % 5 === 0)
      return "Buzz"
    return num
  }
};