
// function saludar(n){
//     return `Hello World ${n}`
// }

// Esta forma es mas segura
// const saludar = function (n){
//     return `Hello World ${n}`
// }

// Funcion flecha o arrow function
// const saludar = (n) => {
//     return `Hello World ${n}`
// }

// Mas facil de leer
const saludar = (n) => `Hello World ${n}`

const name = 'Sandy'
console.log(saludar(name))


const getUser = () => ({
    uid: '15452',
    username: 'Sandy'
})
console.log(getUser())

const heroes = [{
    id: 1,
    name: 'DeadPool'
},{
    id: 2,
    name: 'Spiderman'
}]
console.log(heroes)

// const isHeroe = heroes.some( (heroe) => heroe.id === 3)
// some devuelve true o false
// console.log(isHeroe)

const heroe = heroes.find( (heroe) => heroe.id === 1)
// find devielve el valor si es que existe
console.log(heroe)
console.log(heroe.name)

// destructuracion
const { id } = heroes.find( (heroe) => heroe.id === 1)
console.log(id)
