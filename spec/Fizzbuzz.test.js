import Fizzbuzz from "../src/Fizzbuzz";

//input 1 = 1
// input 2 = 2
// input 3 = Fizz
// input 4 = 4
// input 5 = Buzz
const myClass = new Fizzbuzz();

describe('#Fizzbuzz', () => {
  test("returns the number it's passed", () => {
    expect(myClass.fizzbuzz(1)).toBe(1)
    expect(myClass.fizzbuzz(2)).toBe(2)
  })
  test("returns fizz when the number is 3", () => {
    expect(myClass.fizzbuzz(3)).toBe("Fizz")
  })
  test("returns fizz when the number is a multiple of 3", () => {
    expect(myClass.fizzbuzz(6)).toBe("Fizz")
  })
});