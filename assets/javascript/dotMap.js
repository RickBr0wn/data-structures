const arr = [1, 2, 3, 4]

Array.prototype.dotMap = function dotMap(callback) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    const data = callback(this[i], i, this)
    newArr[i] = data
  }
  return newArr
}

Array.prototype.dotFilter = function dotFilter(callback) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}

const odds = arr.filter(item => item % 2)
const evens = arr.dotFilter(item => item % 2 === 0)

console.log(odds)
console.log(evens)
