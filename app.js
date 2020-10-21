const person = {
    name: "Vlad",
    lastName: "Kuznitzov",
    age: undefined,
    // ['key_' + (1 + 5)]: "6",
    languages: ["Lu", "Ua"],
    // greet() {
    //     console.log('greet from person')
    // }
}

// person['key_6'] = "undefind"
// person.age++
// delete person.age
// console.log(person)

// const {name, lastName, age: personAge = 21} = person 
// console.log(name, lastName, personAge)

for (let key in person) {
    if( person.hasOwnProperty(key)) {
        console.log(key)
        console.log(person[key])
    }
}