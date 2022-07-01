let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}


function save(){
    let totalCount = count + ' - '
    saveEl.textContent += totalCount
    countEl.textContent = 0;
    count = 0;

} 






//let name = 'Rei collins';
//let greetings = 'Hi, welcome back ';

//let welcomeE = greetings + name;

//let welcomeEl = document.getElementById('welcome-el')

//welcomeEl.innerText = welcomeE

//welcomeEl.innerText += '👏'


