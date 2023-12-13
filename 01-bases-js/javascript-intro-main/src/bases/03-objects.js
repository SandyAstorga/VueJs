
// Object
const person = {
    name: 'Sandy',
    lastname: 'Astorga',
    edad: 32,
    address: {
        ciudad: 'Queretaro',
        zip: 76900,
        lat: 12.69852,
        lng: 32.45869
    }
}

console.log(person)

// Todos los objetos son pasados por referencia
const person2 = {...person};

person2.name = 'Yave'

console.log(person2)
console.log(person)


// spread
// const person2 = {...person}




// No confundir con Set
const personSet = new Set()
console.log(personSet)