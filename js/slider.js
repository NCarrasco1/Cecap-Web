(function () {

    const sliders = [...document.querySelectorAll('.us_body')];
    const buttonNext = document.querySelector('#next'); 
    const buttonBefore = document.querySelector('#before'); 
    let value; 

    buttonNext.addEventListener('click', () =>{
        changePosition(1);
    }); 

    buttonBefore.addEventListener('click', () =>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentus = document.querySelector('.us_body--show').dataset.id; 
        value = Number(currentus); 
        value+= add; 

        sliders[Number(currentus)-1].classList.remove('us_body--show');
        if(value === sliders.length+1 || value ===0){
            value = value === 0 ? sliders.length : 1; 
        }

        sliders[value-1].classList.add('us_body--show'); 
    }


})(); 