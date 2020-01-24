const arr: ReadonlyArray<string> = ['foo', 'bar']

const copy = arr.slice().sort()

console.log(arr)
console.log(copy)
