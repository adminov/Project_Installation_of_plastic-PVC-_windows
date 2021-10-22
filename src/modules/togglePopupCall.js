const togglePopupCall = () => {
    const btnOrderCall = document.querySelector('.btn-order-call'),
        headerModal = document.querySelector('.header-modal'),
        overlay = document.querySelector('.overlay');

    const popupData = {
        count: 150,
        speed: 10,
        start: 150,
        end: 0
    };

    const showPopup = () => {
        popupData.start > popupData.end ?
            popupData.count -= popupData.speed :
            popupData.count += popupData.speed;
        headerModal.style.transform = `translateX(${popupData.count}px)`;

        if (popupData.start > popupData.end ?
            popupData.count > popupData.end :
            popupData.count < popupData.end){
            requestAnimationFrame(showPopup);
        }
    };

    btnOrderCall.addEventListener('click',() => {
        overlay.style.display = 'block';
        if (screen.width > 768) {
            popupData.count = popupData.start;
            headerModal.style.display = '';
            requestAnimationFrame(showPopup);
        }
    });



    overlay.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('header-modal__close')) {
            overlay.style.display = 'none';
        } else {
            target = target.closest('.header-modal');
            if (!target) {
                overlay.style.display = 'none';
            }
        }
    });
};

export default togglePopupCall;