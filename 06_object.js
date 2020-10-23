// const person = {
//     name: "Vlad",
//     lastName: "Kuznitzov",
//     age: 27,
//     // ['key_' + (1 + 5)]: "6",
//     // languages: ["It", "Ua"],
//     greet() {
//         console.log('greet from person')
//     },
//     info() {
//         console.log('this', this)
//         console.info('Informaton about this:', this.name)
//     }
// }
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

// const logger = {
//     keys() {
//         console.log('Object keys', Object.keys(this))
//     },
// keysAndValues() {
//     Object.keys(this).forEach(key => {
//         console.log(`"${key}":${this[key]}`)
//     })
//   },

//   wihtParams(top, between, bottom) {
//       if (top) {
//           console.log("____Start____")
//       }
//       Object.keys(this).forEach((key, index, array) => {
//         console.log(`"${key}":${this[key]}`)
//       if (between && index != array.length -1 ) {
//           console.log ("-------------")
//       } 
//     })
//     if (bottom) {
//         console.log('_____End_____')
//     }
//   }
// }
// logger.wihtParams.call(person, true, false, true)

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
//study
// let arr = [2, 4, 6, 8]
//let newArr = []
// arr.forEach((elem) => {
//     newArr.push(elem * elem)
// })
// console.log(newArr)

// let arr = [1, 2, 3, 4, 5]
// let sum = 0
// arr.forEach((elem) => {
//     sum += elem
// })
// console.log(sum)

// let recipeMap = ([
//     ['tomat', 300],
//     ['potato', 400],
//     ['cucucmber', 500]
// ])

// for(let vagitebal of recipeMap.keys()) {
//     console.log(vagitebal)
// }

// recipeMap.forEach((value, key, map) => {
//     console.log(recipeMap[key])
// })

// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// console.log(map1);


// var kvArray = [{key:1, value:10}, 
//     {key:2, value:20}, 
//     {key:3, value: 30}];

// let arr = [1, 5, 4, 3]
// let resultut = arr.map(function(elem, index) {
//     return elem * index
// })
// console.log(resultut)
 
// let letters = ['Hello, my dear frindes', ]

// letters.forEach(function(elem, index, arr) {
//     document.write(elem + ' !')
// })

// let numb = [-3, 4, -1, 2, -15, 51]
// let result = numb.filter(function(elem) {
//     if(elem > 0) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(result)

// let users = [
//     {name: "Nadya", age: 34},
//     {name: "Tanya", age: 21},
//     {name: "Sasha", age: 4}
// ]
// let user = users.find(item => item.age === 4)
// console.log(user.name)


