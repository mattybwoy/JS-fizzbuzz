import Fizzbuzz from "../src/Fizzbuzz";

//input 1 = 1
// input 2 = 2
// input 3 = Fizz
// input 4 = 4
// input 5 = Buzz


describe('#Fizzbuzz', () => {
  test("Fizz when it's a 3", () => {
    let myClass = new Fizzbuzz()
    expect(myClass.fizzbuzz(1)).toBe(1)
  })
});