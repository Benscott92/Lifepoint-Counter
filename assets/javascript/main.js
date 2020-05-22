let addOne = document.querySelector('.p1add')
let subOne = document.querySelector('.p1sub')
let addBoth = document.querySelector('.addboth')
let subBoth = document.querySelector('.subboth')
let addTwo = document.querySelector('.p2add')
let subTwo = document.querySelector('.p2sub')
let p1LPText = document.querySelector('.p1LP')
let p2LPText = document.querySelector('.p2LP')
let userInput = document.querySelector('.box')
let p1LP = Number(p1LPText.innerHTML)
let p2LP = Number(p2LPText.innerHTML)
let footer = document.querySelector('.footer')
let reLoad = document.querySelector('.reset-button')

window.addEventListener('load', function(){
    let firstTurn = Math.random()
    if(firstTurn > .5){
        footer.innerHTML = 'Player One Goes First'
    } else{
        footer.innerHTML = 'Player Two Goes First'
    }

})

addOne.addEventListener('click', function(){
    let lpChange = Number(userInput.value);
    p1LP += lpChange;
    p1LPText.innerHTML = p1LP;
    userInput.value = ''
})

subOne.addEventListener('click', function(){
    let lpChange = Number(userInput.value);
    let newLP = p1LP - lpChange;
    while(newLP < p1LP && p1LP != 0){
        p1LP -= 1
        p1LPText.innerHTML = p1LP
    }
    
    if(p1LP === 0){
        footer.innerHTML = 'Player 2 Wins!'
    }
    userInput.value = ''
})

addBoth.addEventListener('click', function(){
    let lpChange = Number(userInput.value);
    p1LP += lpChange;
    p2LP += lpChange;
    p1LPText.innerHTML = p1LP;
    p2LPText.innerHTML = p2LP;
    userInput.value = '';
})

subBoth.addEventListener('click', function(){
    let lpChange = Number(userInput.value);
    for (let index = userInput.value; index > 0; index -= 1){
        if (p1LP > 0 && index > 0){
            let newLP = p1LP - lpChange
            if(newLP < p1LP && p1LP != 0){
                p1LP -= 1
                p1LPText.innerHTML = p1LP
            }

        }
        if(p2LP > 0 && index > 0 ){
            let newLP = p2LP - lpChange
            if(newLP < p2LP && p2LP != 0){
                p2LP -= 1
                p2LPText.innerHTML = p2LP;
            }

        }
    }

    if(p1LP === 0 && p2LP === 0){
        footer.innerHTML = 'Tie Duel...'
    }else if(p1LP === 0){
        footer.innerHTML = 'Player 2 wins!'
    }else if(p2LP === 0){
        footer.innerHTML = 'Player 1 wins!'
    }
    userInput.value = '';
})

addTwo.addEventListener('click',function(){
    let lpChange = Number(userInput.value);
    p2LP += lpChange;
    p2LPText.innerHTML = p2LP;
    userInput.value = '';
})

subTwo.addEventListener('click', function(){
    let lpChange = Number(userInput.value);
    let newLP = p2LP - lpChange;
    while(newLP < p2LP && p2LP != 0){
        p2LP -= 1
        p2LPText.innerHTML = p2LP;
    }

    if(p2LP === 0){
        footer.innerHTML = 'Player 1 Wins!'
    }
    userInput.value = '';
})

reLoad.addEventListener('click', function(){
    window.location.reload();
})