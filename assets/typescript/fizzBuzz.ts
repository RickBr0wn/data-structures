/**
 * Write a program that prints integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print fizz (instead of the number)
 *  - for multiples of five, print Buz (instead of the number)
 *  - for multiples of both three and five, print FizzBuz (instead of the number)
 */

/**
 * Expected output:
 * 1,2,Fizz,4,Buzz,Fizz ...
 */

for (let index = 1; index < 101; index++) {
  const isMultipleOfThree = index % 3 === 0
  const isMultipleOfFive = index % 5 === 0
  const logger = result => console.log(result)
  let result

  if (isMultipleOfThree && isMultipleOfFive) {
    result = 'FizzBuzz'
  } else if (isMultipleOfThree) {
    result = 'Fizz'
  } else if (isMultipleOfFive) {
    result = 'Buzz'
  } else {
    result = index
  }

  logger(result)
}
