// Refactor function
function sumTwoSmallestNumbers (numbers) {
  let array = numbers.sort((a, b) => a - b)
  return array[0] + array[1]
}

let numbers = [10, 343445353, 3453445, 3453545353453]
console.log(sumTwoSmallestNumbers(numbers)) // 3453455

/* Initial Commit
function sumTwoSmallestNumbers (numbers) {
  if (numbers.length > 3) {
    let firstNumber = numbers[0]
    let counter = 0
    for (let i = 0; i < numbers.length; i++) {
      if (firstNumber >= numbers[i]) {
        firstNumber = numbers[i]
        counter = i
      }
    }
    numbers.splice(counter, 1)
    let secondNumber = numbers[0]
    for (let j = 0; j < numbers.length; j++) {
      if (secondNumber >= numbers[j]) {
        secondNumber = numbers[j]
      }
    }
    return firstNumber + secondNumber
  } else {
    return 'Insert a valid array'
  }
} */
