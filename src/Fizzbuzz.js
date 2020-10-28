export default class Fizzbuzz {
  fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0)
      return "Fizzbuzz"
    else if (num % 3 === 0)
      return "Fizz"
    else if (num % 5 === 0)
      return "Buzz"
    return num
  }


  all() {
    var ans = [];
    for (let i = 1; i <= 100; i++) {
      ans.push(this.fizzbuzz(i));
    }
    console.log(ans);
    return ans
  }
};