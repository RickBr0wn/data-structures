function hashStringToInt(key, tableLength) {
  let hash = 23
  for (const letter in key) {
    hash = (13 * hash * key.charCodeAt(letter)) % tableLength
  }
  return hash
}

export function createHashTable() {
  let table = new Array(100)
  let numberOfItems = 0

  return {
    resize: () => {
      const newTable = new Array(table.length * 2)
      table.forEach((item) => {
        item &&
          item.forEach(([key, value]) => {
            const i = hashStringToInt(key, newTable.length)
            newTable[i]
              ? newTable[idx].push([key, value])
              : (newTable[i] = [[key, value]])
          })
      })
      table = newTable
    },

    add: (key, value) => {
      numberOfItems++
      if (numberOfItems / table.length > 0.8) {
        resize()
      }
      const i = hashStringToInt(key, table.length)
      table[i] ? table[i].push([key, value]) : (table[i] = [[key, value]])
    },

    show: (key) => {
      const i = hashStringToInt(key, table.length)
      if (!table[i]) {
        return `No value stored containing the value '${key}'`
      }
      return table[i].find((keyValuePair) => keyValuePair[0] === key)[1]
    },

    tableLength: () => table.length,

    itemsLength: () => numberOfItems,
  }
}

const hashTable = createHashTable()

console.log(hashTable)

hashTable.add('firstName', 'Rick')
console.log(hashTable.itemsLength())
hashTable.add('lastName', 'Brown')
console.log(hashTable.itemsLength())
hashTable.add('items', 'test')
console.log(hashTable.itemsLength())
hashTable.add('item', 'tests')
console.log(hashTable.itemsLength())
console.log(hashTable.show('firstName'))
console.log(hashTable.show('lastName'))
console.log(hashTable.show('item'))
console.log(hashTable.show('items'))
console.log(hashTable.tableLength())
console.log(hashTable.itemsLength())
