let btnToggle = document.querySelector('#toggle');
let content = document.querySelector('.wrapper');
let contentLight = document.querySelector('.wrapper #light');
let contentDark = document.querySelector('.wrapper #dark');
let favicon = document.querySelector('#favicon');
let btnTest = document.querySelector('#test');
let isChecked;

document.addEventListener('load', function () {
    content.style.transition = 'none';
})

btnToggle.addEventListener("click", () => {
    isChecked = btnToggle.checked
    content.classList.toggle('dark');
    
    
    if(isChecked == true){
        document.title = 'Dark'
        favicon.setAttribute('href', '2.png')
        contentLight.style.display = 'none'
        contentDark.style.display = 'block'
    }
    else{
        document.title = 'Light'
        favicon.setAttribute('href', '1.png')
        contentDark.style.display = 'none'
        contentLight.style.display = 'block'
    }
    // document.querySelector('.wrapper h2').textContent = `${isChecked?'Dark':'Light'}`; //Wow
    // console.log('isChecked', isChecked);
})