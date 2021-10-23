const modalCallMeasurer = () => {
    const serviceBtn = document.querySelectorAll('.service-button'),
        overlayTwo = document.querySelector('.overlayTwo');


    serviceBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            overlayTwo.style.display = 'block';
        });
    });

    overlayTwo.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('services-modal__close')) {
            overlayTwo.style.display = 'none';
        } else {
            target = target.closest('.services-modal');
            if (!target) {
                overlayTwo.style.display = 'none';
            }
        }
    });
};

export default modalCallMeasurer;