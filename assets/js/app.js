const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal--hidden');
}

document.querySelector('.demo-btn')
    .addEventListener('click', toggleModal);

document.querySelector('.x')
    .addEventListener('click', toggleModal);

