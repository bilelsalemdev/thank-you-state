const numbers= document.querySelectorAll('.number-container .number');
const submit=document.querySelector('.submit');
const container = document.querySelector('.container');
const rating = document.querySelector('.rating');
const span = document.querySelector('span')
numbers.forEach((number) => {
    number.addEventListener('click' , (e)=> {
        number.style.backgroundColor='hsl(25, 97%, 53%)';
        number.style.color='white';
        submit.style.color='hsl(25, 97%, 53%)';
        submit.style.backgroundColor='white';
        span.innerHTML=' ' + e.target.innerText + ' ';
        
    })
})
submit.addEventListener('click',()=>{
        container.style.display='none';
        rating.style.display='flex';
        
})
