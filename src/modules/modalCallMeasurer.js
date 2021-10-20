const modalCallMeasurer = () => {
    const serviceBtn = document.querySelectorAll('.service-button'),
         servicesModal = document.querySelector('.services-modal'),
        overlayTwo = document.querySelector('.overlayTwo');

    serviceBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            servicesModal.style.display = 'block';
            overlayTwo.style.display = 'block';
        });
    });

    overlayTwo.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('services-modal__close')) {
            servicesModal.style.display = 'none';
            overlayTwo.style.display = 'none';
        } else {
            target = target.closest('.services-modal');
            if (!target) {
                overlayTwo.style.display = 'none';
                servicesModal.style.display = 'none';
            }
        }
    })
};

export default modalCallMeasurer;