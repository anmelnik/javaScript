const person = {
    name: "Vlad",
    lastName: "Kuznitzov",
    age: 27,
    // ['key_' + (1 + 5)]: "6",
    // languages: ["It", "Ua"],
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log('this', this)
        console.info('Informaton about this:', this.name)
    }
}
// const logger = {
//     keys() {
//         console.log('Object keys', Object.keys(this))
//     }
// }
// const bound = logger.keys.bind(person)
// bound()

// logger.keys.call(person)
// keysAndValues//
//     const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log(key + ": " + person[key])
//  })

// const logger = {
//     keys() {
//         console.log('Object keys', Object.keys(this))
//     },
// keysAndValues() {
//     Object.keys(this).forEach(key => {
//         console.log(`"${key}":${this[key]}`)
//     })
//   }
// }
//  logger.keysAndValues.call(person)

const logger = {
    keys() {
        console.log('Object keys', Object.keys(this))
    },
keysAndValues() {
    Object.keys(this).forEach(key => {
        console.log(`"${key}":${this[key]}`)
    })
  },

  wihtParams(top, between, bottom) {
      if (top) {
          console.log("____Start____")
      }
      Object.keys(this).forEach((key, index, array) => {
        console.log(`"${key}":${this[key]}`)
      if (between && index != array.length -1 ) {
          console.log ("-------------")
      } 
    })
    if (bottom) {
        console.log('_____End_____')
    }
  }
}
logger.wihtParams.call(person, true, false, true)

//  logger.keysAndValues.call(person)



// person.info()

// person['key_6'] = "undefind"
// person.age++
// delete person.age
// console.log(person)

// const {name, lastName, age: personAge = 21} = person 
// console.log(name, lastName, personAge)

// for (let key in person) {
//     if( person.hasOwnProperty(key)) {
//         console.log(key)
//         console.log(person[key])
//     }
// }

// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log(key + ": " + person[key])
// })
