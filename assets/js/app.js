const toggleModal0 = () => {
    document.querySelector('.modal0')
        .classList.toggle('modal0--hidden');
}

document.querySelector('.resume-btn')
    .addEventListener('click', toggleModal0);

document.querySelector('#xr-btn')
    .addEventListener('click', toggleModal0);

const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal--hidden');
}

document.querySelector('.demo-btn')
    .addEventListener('click', toggleModal);

document.querySelector('#x-btn')
    .addEventListener('click', toggleModal);


const toggleModal2 = () => {
    document.querySelector('.modal2')
        .classList.toggle('modal2--hidden')
}

document.querySelector('.demo-btn2')
    .addEventListener('click', toggleModal2);

document.querySelector('#x-btn2')
    .addEventListener('click', toggleModal2);


const toggleModal3 = () => {
    document.querySelector('.modal3')
        .classList.toggle('modal3--hidden')
}

document.querySelector('.demo-btn3')
    .addEventListener('click', toggleModal3);

document.querySelector('#x-btn3')
    .addEventListener('click', toggleModal3);



const toggleModal4 = () => {
    document.querySelector('.modal4')
        .classList.toggle('modal4--hidden')
}

document.querySelector('.email-btn')
    .addEventListener('click', toggleModal4);

document.querySelector('#x-btn4')
    .addEventListener('click', toggleModal4);




