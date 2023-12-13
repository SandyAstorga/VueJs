
const myPromise = () =>{
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            // resolve('Tenemos un valor en la promesa')
            reject('Error')
        }, 1000)
    })
}


const medirTiempoAsync = async() => {

    try {
        console.log('Inicio')
        
        const res = await myPromise()
        console.log(res)
        
        console.log('Fin')

        return 'Fin de medirTiempoAsync'

    } catch (error) {
        // return 'Catch en medirTiempoAsync'
        throw 'Error en medirTiempoAsync'
    }
}

medirTiempoAsync()
    .then( valor => console.log('THEN exitoso:', valor))
    .catch( err => console.log('error:', err))