const imgZoom = () => {

    const sertificateDocument = document.querySelectorAll('.sertificate-document'),
        popupImg = document.querySelector('.popupImg');

    let imgClass;
    sertificateDocument.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();

            imgClass = elem.querySelector('.img-responsive');
            imgClass = imgClass.cloneNode();
            popupImg.append(imgClass);
            const removeImgClass = popupImg.querySelector('.img-responsive');
            removeImgClass.removeAttribute('class');
            const tmp = popupImg.getElementsByTagName('img')[0];
            tmp.classList.add('inPopupImg');
            popupImg.style.display = 'block';

        });
    });


    popupImg.addEventListener('click', (event) => {
        let target = event.target;
        const inPopupImg = popupImg.querySelector('.inPopupImg');
        if (!target.closest('.inPopupImg')){
            popupImg.style.display = 'none';
            inPopupImg.remove();
        }
    });


};

export default imgZoom;