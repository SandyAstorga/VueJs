// MODULARIZANDO

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}


export default counterStore



// import getRandomInt from '@/helpers/getRandomInt'

// const counterStore = {
    
//     namespaced: true,

//     state:() => ({
//         count: 1,
//         lastMutation: 'none',
//         isLoading: false,
//         lasRandomInt: 0
//     }),
//     // Son como los metodos
//     // Cambian directamente el State y son sincronas
//     // No pueden ser asincronas
//     // Las mutations son mediante commits
//     mutations:{
//         increment( state ){
//             state.count++
//             state.lastMutation = 'increment'
//         },
//         incrementBy( state, val ){
//             state.count += val
//             state.lastMutation = 'incrementBy' + val
//             state.lasRandomInt = val
//         },
//         setLoading(state, val){
//             state.isLoading = val
//             state.lastMutation = 'setLoadind' + val
//         }
//     },
//     // La actions son asincronas
//     // Las actions son despachadas (dispatch)
//     actions:{
//         async incrementRandomInt({commit}){
//             commit('setLoading', true)

//             const randomInt = await getRandomInt()

//             commit('incrementBy', randomInt)
//             commit('setLoading', false)
//         }
//     },
//     // Son parecidos a las computed
//     getters:{
//         squareCount( state ){
//             return state.count * state.count
//         }
//     }
// }

// export default counterStore