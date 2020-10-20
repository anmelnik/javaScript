// create array with length = 10 start position letter a e.g [a, b, c ... ]
// print all elements from array using while loop
// if array eleemnt equal 'c' or 'g', print it

const user = {
    name: "Vasya",
    age: 10,
    sex: "male",
    maried: true,
    lovers: ['Tanka', 'Olka', 'Yulka', 'Mashka']
}

let i = 0
let keys = Object.keys(user)
let j = keys.length
while (i < j) {
    if (keys[i] === "lovers") {
        let lovers = user[keys[i]]
        let y = 0
        while (y < lovers.length) {
            console.log(lovers[y])
            y++
        }
    }
    i++
}
