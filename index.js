const cardNumberInput = document.querySelector('.card-number-input');
const cardHolderInput = document.querySelector('.card-holder-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const cvvInput = document.querySelector('.cvv-input');

cardNumberInput.addEventListener('input', () => {
    const cardNumberBox = document.querySelector('.card-number-box');
    cardNumberBox.innerText = document.querySelector('.card-number-input').value;
});

cardHolderInput.addEventListener('input', () => {
    const cardHolderName = document.querySelector('.card-holder-name');
    cardHolderName.innerText = document.querySelector('.card-holder-input').value;
});

monthInput.addEventListener('input', () => {
    const expMonth = document.querySelector('.exp-month');
    expMonth.innerText = document.querySelector('.month-input').value;
});

yearInput.addEventListener('input', () => {
    const expYear = document.querySelector('.exp-year');
    expYear.innerText = document.querySelector('.year-input').value;
});

cvvInput.addEventListener('input', () => {
    const cvvBox = document.querySelector('.cvv-box');
    cvvBox.innerHTML = document.querySelector('.cvv-input').value;
});

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
};

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
};



