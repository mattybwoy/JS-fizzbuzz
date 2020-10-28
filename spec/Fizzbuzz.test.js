import Fizzbuzz from "../src/Fizzbuzz";

//input 1 = 1
// input 2 = 2
// input 3 = Fizz
// input 4 = 4
// input 5 = Buzz


describe('#Fizzbuzz', () => {
  test("returns the number it's passed", () => {
    let myClass = new Fizzbuzz()
    expect(myClass.fizzbuzz(1)).toBe(1)
    expect(myClass.fizzbuzz(2)).toBe(2)
  })
  test("returns fizz when the number is 3", () => {
    let myClass = new Fizzbuzz()
    expect(myClass.fizzbuzz(3)).toBe("Fizz")
  })
});