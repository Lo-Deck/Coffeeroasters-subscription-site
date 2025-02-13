# Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Make selections to create a coffee subscription and see an order summary modal of their choices

### Screenshot

![screenshot mobile-home](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-mobile.png).
![screenshot mobile-about](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-mobile-about.png).
![screenshot mobile-plan](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-mobile-plan.png).
![screenshot mobile-modal](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-mobile-modal.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-mobile-menu.png).
![screenshot tablet-home](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-tablet.png).
![screenshot tablet-about](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-tablet-about.png).
![screenshot tablet-plan](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-tablet-plan.png).
![screenshot desktop-home](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-desktop.png).
![screenshot desktop-about](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-desktop-about.png).
![screenshot desktop-plan](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-desktop-plan.png).
![screenshot desktop-modal](https://github.com/Lo-Deck/Coffeeroasters-subscription-site/blob/main/screenshot/Coffeeroasters%20subscription%20site-desktop-modal.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Coffeeroasters-subscription-site).
- Live Site URL: [Website](https://lo-deck.github.io/Coffeeroasters-subscription-site/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to do a selection page with a `form` with different `input type="radio"` and enabled or disabled some of the selection depending on the `input`, making a website with different pages.


```js
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

	...

}


```

and validate the form using 

```js

document.querySelector('input[name="howYouDrink"]:checked');

```



### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
