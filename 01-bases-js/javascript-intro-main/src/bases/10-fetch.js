

const apiKey = 'uCuSvK4tdl9c1pboPIaLt1mUqpDOXbrM'
// https://api.giphy.com/v1/gifs/random?api_key=uCuSvK4tdl9c1pboPIaLt1mUqpDOXbrM
const apiGiphy = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

fetch(apiGiphy)
        .then( res => res.json() )
        .then(({data}) => {
            const { url } = data.images.original
            // 
            const img = document.createElement('img')
            img.src = url

            document.body.append(img)
        })
        .catch( e => (e))
