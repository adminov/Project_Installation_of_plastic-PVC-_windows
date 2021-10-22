const modalCallMeasurer = () => {
    const serviceBtn = document.querySelectorAll('.service-button'),
         servicesModal = document.querySelector('.services-modal'),
        overlayTwo = document.querySelector('.overlayTwo'),

        popup = {
        count: 150,
        speed: 10,
        start: 150,
        end: 0
    };

    const showPopups = () => {
        popup.start > popup.end ?
            popup.count -= popup.speed :
            popup.count += popup.speed;
        servicesModal.style.transform = `translateX(${popup.count}px)`;

        if (popup.start > popup.end ?
            popup.count > popup.end :
            popup.count < popup.end){
            requestAnimationFrame(showPopups);
        }
    };

    serviceBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            overlayTwo.style.display = 'block';
            if (screen.width > 768) {
                popup.count = popup.start;
                servicesModal.style.display = '';
                requestAnimationFrame(showPopups);
            }
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