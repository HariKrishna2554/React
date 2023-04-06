const standArray = ['a', 'e', 'i', 'o', 'u']
const final_Array = [...standArray, 'b', 'c']

console.log(final_Array)


const person = {
    name : 'x',
    age : 1
}

const latestPerson = {
    ...person,
    year : 2021
}

console.log(latestPerson)