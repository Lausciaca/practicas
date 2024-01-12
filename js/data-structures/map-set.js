// Map
const map = new Map()

map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

console.log(map.get('a'))

console.log(map.has('a'))

map.set('a', 90)
console.log(map.get('a'))
console.log(map.size)

console.log(map)

map.delete('b')
console.log(map)


// Set
const set = new Set();
set.add(4)
set.add(5)
set.add(6)
set.add(7)

console.log(set.has(4))
console.log(set.size)

set.delete(5)



// podemos sacar los repetidos
const repetidos = [1, 1, 2, 3, 3, 3, 2, 4, 5]

const arr = [... new Set(repetidos)]
console.log(arr)