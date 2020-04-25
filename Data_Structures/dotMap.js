const arr = [1, 2, 3, 4]

Array.prototype.dotMap = function(callback) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    const data = callback(this[i], i, this)
    newArr[i] = data
  }
  return newArr
}

Array.prototype.dotFilter = function(callback) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}

Array.prototype.dotReduce = function(callback, accumulator) {
  if (Array.isArray(accumulator)) {
    for (let i = 0; i < this.length; i++) {
      res = callback(acc, this[i], i, this)
      accumulator.push(res)
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      res = callback(acc, this[i], i, this)
      accumulator += res
    }
  }

  return accumulator
}

const odds = arr.reduce((a, b) => (b % 2 === 0 ? a + b : null), [])
const evens = arr.reduce((a, b) => (b % 2 !== 0 ? a + b : null), [])

console.log(odds)
console.log(evens)
