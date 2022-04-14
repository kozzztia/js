
const push = document.querySelector('.push');
const title = document.querySelector('.title');
const main = document.querySelector('.main');


const array = {a:10, s:5 , d:6 , f:7, g:2}
let [x,y] = [0 ,0];

function rundomNumber(min , max) {
    return Math.floor(Math.random() * (max - min) + min)*200;
}
let content ={}
let items = {}
async function firstOperation(){
    setTimeout(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(allContent => {
            content = allContent.slice(0 ,10)
            content.map((image) =>{
            let newDiv = document.createElement('img');
                newDiv.src = image.url;
                newDiv.classList.add('div');
            main.appendChild(newDiv);
            })
            return content
        })
        console.log('first step......');
    },rundomNumber(1,10))

}
async function secondOperation(){
    setTimeout(()=>{
        let items = document.querySelectorAll('.div');
        content.map((text , i )=> {
           items[i].classList.add('scale')
        })
        console.log('second step......');
    },rundomNumber(1,10)) 
}
async function thirdOperation(){
    setTimeout(() =>{
        let items = document.querySelectorAll('.div');
        items.forEach(item => {
            item.classList.add('rotate');
        })
        console.log('third step......');
    },rundomNumber(1,10))
} 






 function createAll(){
  firstOperation();
  secondOperation();
 thirdOperation()
}


push.onclick = () =>{
    createAll()
}



