count = 0;
value = document.querySelector('#value');
btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
        if(e.currentTarget.classList.contains('decrease')){
            count--;
       }
        else if(e.currentTarget.classList.contains('increase')){
            count++;
       }
        else if(e.currentTarget.classList.contains('reset')){
            count = 0;
       }
       value.textContent = count;
       if(count < 0){
           value.style.color = 'red';
       }
       else if(count > 0){
           value.style.color = 'green';
       }
       else if(count === 0){
           value.style.color = 'black';
       }
    });    
});