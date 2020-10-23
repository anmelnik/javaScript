// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
// delay(()  => {
//     console.log('Alert 2 seconds')
// }, 2000)

// const delay = (wait = 1000) => {
//    const promise = new Promise ( (resolve, reject) => {
//         setTimeout (() => {
//            resolve()
//         }, wait)
//     })
//    return promise
// }
// delay(2500)
// .then(() => console.log('After second 2'))
// .catch(err => console.error(err))
// .finally(()=> console.log('Finally'))

// const getData = () => new Promise(resolve => resolve([ 
//     1, 2, 3, 5, 12, 81, 'des'
// ]))

// getData().then(data => console.log(data))

// async function asyncExample() {
//     await delay(3000)
//     const data = await getData()
//     console.log('Data', data)
// }
// asyncExample()
