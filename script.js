const advNumber = document.querySelector('.advice-number');
const advContent = document.querySelector('.advice-content');
const advBtn = document.querySelector('.get-advice');

fetch('https://api.adviceslip.com/advice').then(Response => {
    return Response.json();
}).then(dataObj => { 
    const advice = dataObj.slip;
    console.log(advice);
    advContent.textContent = advice.advice;
    advNumber.textContent = `ADVICE #${advice.id}`;
});