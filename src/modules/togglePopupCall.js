const togglePopupCall = () => {
    const btnOrderCall = document.querySelector('.btn-order-call'),
        headerModal = document.querySelector('.header-modal'),
        overlay = document.querySelector('.overlay');

    btnOrderCall.addEventListener('click', () => {
        headerModal.style.display = 'block';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('header-modal__close')) {
            overlay.style.display = 'none';
        } else {
            target = target.closest('.overlay');
            if (target) {
                overlay.style.display = 'none';
            }
        }
    })
};

export default togglePopupCall;