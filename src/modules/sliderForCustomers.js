const sliderForCustomers = () => {
    const benefitsInner = document.querySelector('.benefits-inner'),
        benefitsWrap = document.querySelector('.benefits-wrap'),
        benefitsItems = document.querySelectorAll('.benefits__item'),
        btnLeft = document.querySelector('.benefits__arrow--left'),
        btnRight = document.querySelector('.benefits__arrow--right');

    benefitsInner.style.overflow = 'hidden';
    benefitsWrap.style.marginLeft = 'inherit';

    if (screen.width <= 1220){
        let positions = 0;
        const slidesToShow = 1;
        const slidesToScroll = 1;

        const itemCount = benefitsItems.length;
        const itemWidth = benefitsInner.clientWidth / slidesToShow;
        const movePosition = slidesToScroll * itemWidth;

        benefitsItems.forEach((item) => {
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
            benefitsWrap.style.transform = `translateX(${positions}px)`;
        };

    } else {
        let position = 0;
        const slidesToShow = 3;
        const slidesToScroll = 3;

        const itemCount = benefitsItems.length;
        const itemWidth = benefitsInner.clientWidth / slidesToShow;
        const movePosition = slidesToScroll * itemWidth;

        benefitsItems.forEach((item) => {
            item.style.minWidth = `${itemWidth}px`;
        });

        btnRight.addEventListener('click', () => {
            const  itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
            position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        btnLeft.addEventListener('click', () => {
            const  itemLeft = Math.abs(position) / itemWidth;
            position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        const setPosition = () => {
            benefitsWrap.style.transform = `translateX(${position}px)`;
        };
    }


};

export default sliderForCustomers;