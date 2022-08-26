const numbers= document.querySelectorAll('.number-container .number');
const submit=document.querySelector('.submit');
const container = document.querySelector('.container');
const rating = document.querySelector('.rating');
const span = document.querySelector('span')
numbers.forEach((number,index) => {
    number.addEventListener('click' , (e)=> {
        number.classList.add('selected')
        
        submit.style.color='hsl(25, 97%, 53%)';
        submit.style.backgroundColor='white';
        span.innerHTML=' ' + e.target.innerText + ' ';
        cancelSelection(index);
    })
})
function cancelSelection(i){
    numbers.forEach((number,index) => {
        if(index !== i) {
            number.classList.remove('selected')
        }
    })}
submit.addEventListener('click',()=>{
        container.style.display='none';
        rating.style.display='flex';
        
})
