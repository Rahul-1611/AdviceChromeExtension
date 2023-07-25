let quote = document.querySelector('.quote');
let id = document.querySelector('span');
const button = document.querySelector('button');
const svgDiv = document.querySelector('#svg');

let printAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(data => data.json())
        .then(data => {
            const advice = data.slip.advice;
            quote.innerText = `"${advice}"`;
            id.innerText = data.slip.id;
        })
        .catch(e => {
            console.log(e);
        })
}

button.addEventListener('click', printAdvice);
printAdvice();