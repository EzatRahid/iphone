const password = 1234;

let buttons = document.querySelectorAll('.btn')
let circle = document.querySelectorAll('.circle')

const keys = [
    1,2,3,
    4,5,6,
    7,8,9,
      0
]


buttons.addEventListener('click', () =>{
    buttons.forEach(button =>{
        for(const key of keys){
            const [a,b,c,d] = keys
        
            const key1 = buttons[a].value
            const key2 = buttons[b].value
            const key3 = buttons[c].value
            const key4 = buttons[d].value
           
        
        }
console.log(key1,key2,key3,key4)
    })
})


