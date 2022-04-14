
const push = document.querySelector('.push');
const title = document.querySelector('.title');
const main = document.querySelector('.main');
let newDiv;
let newImage;

async function firstOperation(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    console.log('load.................1')
    return res.json();

}
async function secondOperation(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    console.log('load.................2')
    return res.json();
}
async function thirdOperation(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    console.log('load.................3')
    return res.json();
} 


async function createAll(){
    main.innerHTML = "";
    let a = await  firstOperation();
    a.slice(0 ,10).map((item , i)=> {
        newDiv = document.createElement('div');
        newDiv.classList.add('div')
        newDiv.innerHTML = `<h2 class="title">${item.title}</h2>`;
        main.appendChild(newDiv);
    })
    let b = await secondOperation();
    let items = document.querySelectorAll('.div');
    b.slice(10 ,20).map((link , i) => {
        image = document.createElement('img');
        image.src = link.url;
        image.classList.add('image');
        items[i].appendChild(image);
    })
    let c = await thirdOperation();
        c.slice(20 , 30).map((post , index) =>{
           console.log(index)
        })
}


push.onclick = () =>{
    createAll()
}