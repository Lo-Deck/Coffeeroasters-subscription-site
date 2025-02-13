
/* MENU */

const btnMenu = document.querySelector('.button-nav');

let isBtnMenuClicked = false;

btnMenu.addEventListener('click', () => {

    isBtnMenuClicked = !isBtnMenuClicked;

    if(isBtnMenuClicked){
        document.querySelector('.nav-menu').style.display = 'block';
        document.querySelector('.background-menu').style.display = 'block';
        document.querySelector('.hamburger').src = './images/shared/mobile/icon-close.svg';
    }

    else{
        document.querySelector('.nav-menu').style.display = 'none';
        document.querySelector('.background-menu').style.display = 'none';
        document.querySelector('.hamburger').src = './images/shared/mobile/icon-hamburger.svg';
    }

});


/* FORM */

let isClicked = false;

document.querySelectorAll('.makeSelection').forEach( (item, index, array) => {

    item.addEventListener('click', () => {

        if(!item.classList.contains('disabled')){

            isClicked = !isClicked;

            !document.querySelectorAll('.arrow svg')[index].style.transform ? document.querySelectorAll('.arrow svg')[index].style.transform = 'rotateX(180deg)' : document.querySelectorAll('.arrow svg')[index].style.transform = '';
    
            for(let i = 0; i < array.length; i++){

                if(i === index){
                    document.querySelectorAll('.selection p')[i].classList.add('selected');
                }
                else{
                    document.querySelectorAll('.selection p')[i].classList.remove('selected');
                }

            }

            const children = document.querySelectorAll('.container-display-select')[index].children;

            for(const child of children){
                
                if(child.classList.contains('container-select') && window.getComputedStyle(child).getPropertyValue('display') === 'none'){           
                    child.style.display = 'block';       
                }

                else if( child.classList.contains('container-select') && window.getComputedStyle(child).getPropertyValue('display') === 'block' ){
                    child.style.display = 'none';
                }

            }

        }

    });

});



document.querySelectorAll('.selection p').forEach( (item, index, array) => {

    item.addEventListener('click', () => {

        isClicked = !isClicked;

        !document.querySelectorAll('.arrow svg')[index].style.transform ? document.querySelectorAll('.arrow svg')[index].style.transform = 'rotateX(180deg)' : document.querySelectorAll('.arrow svg')[index].style.transform = '';

        for(let i = 0; i < array.length; i++){

            if(i === index){
                document.querySelectorAll('.selection p')[i].classList.add('selected');
            }
            else{
                document.querySelectorAll('.selection p')[i].classList.remove('selected');
            }

        }

        const children = document.querySelectorAll('.container-display-select')[index].children;

        for(const child of children){
            
            if(child.classList.contains('container-select') && window.getComputedStyle(child).getPropertyValue('display') === 'none'){           
                child.style.display = 'block';   
            }

            else if( child.classList.contains('container-select') && window.getComputedStyle(child).getPropertyValue('display') === 'block' ){
                child.style.display = 'none';
            }

        }

    });

});



document.querySelectorAll('input[type="radio"]').forEach( (item, index, array) => {

    item.addEventListener('change', () => {

        let text;

        if(item.value === 'Capsule'){
            text = `using ${item.value}`;
            document.querySelector('.white').style.display = 'none';
            document.querySelectorAll('.makeSelection')[3].classList.add('disabled');
            document.querySelectorAll('.selection p')[3].classList.add('disabled');
            document.querySelector('.white').style.display = 'none';

            document.querySelectorAll('.selection p')[3].href = '#';

            for(let i = 10; i <= 12; i++){
                myForm[i].checked = false;
                document.querySelectorAll('.container-select')[i-1].style.display = 'none';
            }

        }

        else if( ( item.value === 'Filter' && item.name === "howYouDrink" ) || item.value === 'Espresso'){
            text = `as ${item.value}`;
            document.querySelectorAll('.makeSelection')[3].classList.remove('disabled');
            document.querySelectorAll('.selection p')[3].classList.remove('disabled');
            document.querySelector('.white').style.display = 'inline';
        }

        else{
            text = item.value;
        }


        if(item.name === 'HowMuch'){

            console.log(item.name);

            switch(item.value){

                case '250g':
                    document.querySelectorAll('.price')[0].textContent = '$7.20';
                    document.querySelectorAll('.price')[1].textContent = '$9.60';
                    document.querySelectorAll('.price')[2].textContent = '$12.00';
                    break;

                case '500g':
                    document.querySelectorAll('.price')[0].textContent = '$13.00';
                    document.querySelectorAll('.price')[1].textContent = '$17.50';
                    document.querySelectorAll('.price')[2].textContent = '$22.00';
                    break;

                case '1000g':
                    document.querySelectorAll('.price')[0].textContent = '$22.00';
                    document.querySelectorAll('.price')[1].textContent = '$32.00';
                    document.querySelectorAll('.price')[2].textContent = '$42.00';
                    break;

            }

        }

        document.querySelectorAll('.choices')[Math.floor(index/3)].textContent = text;

    });

});




if(document.querySelector('.plan')){

    const myForm = document.querySelector('#myForm');

    myForm.addEventListener('submit', (event) => {

        console.log('submit');

        event.preventDefault();

        let validate = false;

        if( ( document.querySelector('input[name="howYouDrink"]:checked') && !myForm[0].checked ) && document.querySelector('input[name="typeOfCoffee"]:checked') &&
            document.querySelector('input[name="HowMuch"]:checked') && document.querySelector('input[name="grind"]:checked') &&
            document.querySelector('input[name="time"]:checked') ){

            validate = true;

        }

        else if(( document.querySelector('input[name="howYouDrink"]:checked') && myForm[0].checked ) && document.querySelector('input[name="typeOfCoffee"]:checked') &&
                document.querySelector('input[name="HowMuch"]:checked') && document.querySelector('input[name="time"]:checked')){

            validate = true;
            
        }


        // console.log(validate);

        if(validate){

            document.querySelector('.background-modal').style.display = 'block';
            document.querySelector('.modal').style.display = 'block';
            document.querySelector('.modal p.title').innerHTML = document.querySelector('.result .title').innerHTML;

            for(let i = 0; i < document.querySelectorAll('input[name="time"]').length ; i++){

                if(document.querySelectorAll('input[name="time"]')[i].checked){

                    let price = document.querySelectorAll('input[name="time"]')[i].nextElementSibling.children[1].children[0].textContent;

                    price = price.split('');
                    price.shift();
                    price = price.join('');

                    console.log(price);

                    let amount;

                    switch(document.querySelectorAll('input[name="time"]')[i].value){

                        case 'Every week':
                            console.log('week');
                            amount = `$${(Number(price) * 4).toFixed(2)}`;
                            break;
                        
                        case 'Every 2 weeks':
                            console.log('2 week');
                            amount = `$${(Number(price) * 2).toFixed(2)}`;
                            break;

                        case 'Every month':
                            console.log('month');
                            amount = `$${Number(price).toFixed(2)}`;
                            break;

                    }

                    document.querySelectorAll('.modal .payment').forEach( (item) => {
                        item.textContent = `${amount}`;
                    });

                }

            }

             window.scrollTo(0, 0);

        }

        else{
            alert('Please fill the form');
        }

    });


    document.querySelector('.modal .button-plan').addEventListener('click', () => {
        document.querySelector('.background-modal').style.display = 'none';
        document.querySelector('.modal').style.display = 'none';
    });

}
