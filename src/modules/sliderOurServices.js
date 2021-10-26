const sliderOurServices = () => {
    const services = document.getElementById('services'),
        row = services.querySelector('.row'),
        serviceWrap = document.querySelector('.service-wrap'),
        serviceItems = document.querySelectorAll('.service-item'),
        serviceBlocks = document.querySelectorAll('.service-block'),
        btnLeft = services.querySelector('.services__arrow--left'),
        btnRight = services.querySelector('.services__arrow--right');

    row.style.cssText = `overflow: hidden;
    text-align: -webkit-center;`;

    if (screen.width >= 1200) {

        let positions = 0;
        const slidesToShow = 2;
        const slidesToScroll = 2;

        const itemCount = serviceItems.length;
        const itemWidth = row.clientWidth / slidesToShow;
        const movePosition = slidesToScroll * itemWidth;

        serviceBlocks.forEach((item) => {
            item.style.minWidth = '500px'
        });
        serviceItems.forEach((item) => {
            item.style.minWidth = `${itemWidth}px`;

        });

        btnRight.addEventListener('click', () => {
            const  itemLeft = itemCount - (Math.abs(positions) + slidesToShow * itemWidth) / itemWidth;
            positions -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        btnLeft.addEventListener('click', () => {
            const  itemLeft = Math.abs(positions) / itemWidth;
            positions += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        const setPosition = () => {
            serviceWrap.style.transform = `translateX(${positions}px)`;
        };
    } else {

        let positions = 0;
        const slidesToShow = 1;
        const slidesToScroll = 1;

        const itemCount = serviceItems.length;
        const itemWidth = row.clientWidth / slidesToShow;
        const movePosition = slidesToScroll * itemWidth;

        serviceItems.forEach((item) => {

            if (screen.width <= 581) {
                row.style.cssText = `overflow: hidden;
    text-align: -webkit-center;`;
                item.style.minWidth = `${itemWidth}px`;
                serviceBlocks.forEach((item) => {
                    item.style.minWidth = '300px'
                });
                if (screen.width <= 380) {
                    row.style.cssText = `overflow: hidden`;
                    item.style.minWidth = `${itemWidth}px`;
                    serviceBlocks.forEach((item) => {
                        item.style.minWidth = '225px'
                    });
                }
            } else {
                item.style.minWidth = `${itemWidth}px`;
                serviceBlocks.forEach((item) => {
                    item.style.minWidth = '500px';
                });
            }
        });

        btnRight.addEventListener('click', () => {
            const  itemLeft = itemCount - (Math.abs(positions) + slidesToShow * itemWidth) / itemWidth;
            positions -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        btnLeft.addEventListener('click', () => {
            const  itemLeft = Math.abs(positions) / itemWidth;
            positions += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        const setPosition = () => {
            serviceWrap.style.transform = `translateX(${positions}px)`;
        };
    }


};

export default sliderOurServices;