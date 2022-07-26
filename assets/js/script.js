// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')


// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-modal')
//     })
// }

// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-modal')
//     })
// }

let Numbers = document.getElementById("box")
for(i = 0 ; i < 1000 ; i++) {
    let span = document.createElement('span')
    span.textContent = i
    Numbers.appendChild(span)
}
let Num = Numbers.getElementsByTagName('span')
let index = 0

function NextNum() {
    Num[index].style.display = 'none'
    index = (index + 1) % Num.length
    Num[index].style.display = 'initial'
}

function PrevNum() {
    Num[index].style.display = 'none'
    index = (index - 1 + Num.length) % Num.length
    Num[index].style.display = 'initial'
}

let SecondNumbers = document.getElementById("second-box")
for(j = 0 ; j < 1000 ; j++) {
    let span = document.createElement('span')
    span.textContent = j
    SecondNumbers.appendChild(span)
}

let SecondNum = SecondNumbers.getElementsByTagName('span')
let secondindex = 0

function SecondNextNum() {
    SecondNum[secondindex].style.display = 'none'
    secondindex = (secondindex + 1) % SecondNum.length
    SecondNum[secondindex].style.display = 'initial'
}

function SecondPrevNum() {
    SecondNum[secondindex].style.display = 'none'
    secondindex = (secondindex - 1 + SecondNum.length) % SecondNum.length
    SecondNum[secondindex].style.display = 'initial'
}