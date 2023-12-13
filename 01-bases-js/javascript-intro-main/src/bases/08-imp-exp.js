
// import { owners } from './data/heroes'
import superHeroes from '../data/heroes'

// console.log(owners)
// console.log(superHeroes)

// Arrow Functions
// getHeroById( id )
export const getHeroById = ( id ) => superHeroes.find ( hero => hero.id === id)
// console.log( getHeroById(2))


// getHeroesByOwner 'DC' 'Marvel'
export const getHeroesByOwner = ( owner ) => superHeroes.filter ( hero => hero.owner === owner)
// console.log( getHeroesByOwner('Marvel'))

