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
      table.forEach(item => {
        if (item) {
          item.forEach(([key, value]) => {
            const i = hashStringToInt(key, newTable.length)
            if (newTable[i]) {
              newTable[idx].push([key, value])
            } else {
              newTable[i] = [[key, value]]
            }
          })
        }
      })
      table = newTable
    },
    setItem: (key, value) => {
      numberOfItems++
      const loadFactor = numberOfItems / table.length
      if (loadFactor > 0.8) {
        resize()
      }
      const i = hashStringToInt(key, table.length)
      table[i] ? table[i].push([key, value]) : (table[i] = [[key, value]])
    },
    getItem: key => {
      const i = hashStringToInt(key, table.length)
      if (!table[i]) {
        return `No value stored containing the value '${key}'`
      }
      return table[i].find(keyValuePair => keyValuePair[0] === key)[1]
    },
    tableLength: () => table.length,
    numberOfItemsInHashTable: () => numberOfItems,
  }
}

const hashTable = createHashTable()

hashTable.setItem('firstName', 'Rick')
hashTable.setItem('lastName', 'Brown')
hashTable.setItem('items', 'test')
hashTable.setItem('item', 'tests')
console.log(hashTable.getItem('firstName'))
console.log(hashTable.getItem('lastName'))
console.log(hashTable.getItem('item'))
console.log(hashTable.getItem('items'))
console.log(hashTable.tableLength())
console.log(hashTable.numberOfItemsInHashTable())
