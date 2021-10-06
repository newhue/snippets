// Text 1
let content = document.querySelector('.one')
let strText = content.textContent
let str = strText.split('')
let textTimer = setInterval(textEffect,100)
content.innerHTML=''

for(let i=0; i<str.length; i++){
    content.innerHTML += `<span>${str[i]}</span>`;
}
let char = 0

function textEffect(){
    const span = content.querySelectorAll('span')[char];
    span.classList.add('fade');
    
    setTimeout(()=>{
        span.classList.add('move'); //Moving upwards effect
    },2000)
    char++;
    if(char === str.length){
        finishTimer();
        return
    }
}

function finishTimer(){
    clearInterval(textTimer);
    textTimer = null;
}

console.log(content);
console.log(str);