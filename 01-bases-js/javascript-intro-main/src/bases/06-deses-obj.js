
const person = {
    name: 'Wide',
    age: 40,
    codeName: 'DeadPool',
    // power: 'fuerte'
}

const { codeName, name, age , power = "Inmortal" } = person

// console.log(codeName)
// console.log(name)
// console.log(age)
// console.log(power)

const createHero = ( {name, age, codeName, power } ) => ({
    
        id: 12345648,
        name,
        age,
        codeName,
        power,
})

console.log( createHero(person))