
const characters = ['Naruto', 'Sasuke', 'Sai']

const [ , , s] = characters
console.log(s)

const [ n ] = characters
console.log(n)

const returnArray = () => {
    return ['ABC', 123 ]
}

const [ letters, numbers ] = returnArray()
console.log(letters, numbers)