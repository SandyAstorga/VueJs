
import axios from 'axios'

const apiKey = 'uCuSvK4tdl9c1pboPIaLt1mUqpDOXbrM'
// https://api.giphy.com/v1/gifs/random?api_key=uCuSvK4tdl9c1pboPIaLt1mUqpDOXbrM
// const apiGiphy = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`


const apiGiphy = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default apiGiphy;


// apiGiphy.get('/random')
//     .then(res => {
//         // console.log(res.data.data)
//         // no
//         // const { url } = res.data.data.images.original
//         // console.log(url)

//         const { data } = res.data
//         const { url } = data.images.original

//         const img = document.createElement('img')
//             img.src = url

//             document.body.append(img)
//     })