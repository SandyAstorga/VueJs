const isAuthenticatedGuard = async(to, from, next) => {
    // console.log({to, from, next})

    return new Promise(() => {
        const random = Math.random() * 100
        if( random > 50 ) {
            console.log('isAuthenticated')
            next()
        } else {
            console.log(random, 'bloqueado por el isAuthenticated Guard', random)
            next({ name: 'naruto-home' })
        }
    })
}

export default isAuthenticatedGuard