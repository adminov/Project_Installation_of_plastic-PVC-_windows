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
            headerModal.style.display = 'none';
            overlay.style.display = 'none';
        } else {
            target = target.closest('.header-modal');
            if (!target) {
                headerModal.style.display = 'none';
                overlay.style.display = 'none';
            }
        }
    })
};

export default togglePopupCall;