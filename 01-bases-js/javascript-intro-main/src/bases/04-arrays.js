

const array = [1,2,3,4]

array.push( 5 )
console.log(array)
console.log(array[0])

// Spread
const array2 = [...array]
array2.push( 6 )

console.log(array)
console.log(array2)

// Map
const array3 = array2.map( function( n ){
    return n * 2
})
array3.push( 14 )

console.log(array3)