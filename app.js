const elem = document.querySelector('h1')

elem.textContent = 'Hello student'
elem.style.color = 'white'
elem.style.textAlign = 'center'
elem.style.backgroundColor = 'greenyellow'
elem.style.padding = '1em'

const elem1 = document.getElementById('list') 
setTimeout(() => {
    addStylesToo(elem1.children[0])
}, 3000)
function addStylesToo (node) {
    node.textContent = 'Learning javaScript'
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '3em'
    node.style.width = '100%'
    node.style.display = 'block'
}
elem1.onclick = () => {
    if ( elem1.style.color === 'red') {
        elem1.style.color = 'green'
        elem1.style.backgroundColor = '#fff'
    } else {
        elem1.style.color = 'red'
        elem1.style.backgroundColor = '#000'
       }
}