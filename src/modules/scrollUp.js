const scrollUp = () => {
    const offset = 800,
        smoothScroll = document.querySelector('.smooth-scroll');

    const getUp = () => window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {
        if (getUp() > offset) {
            smoothScroll.classList.add('smooth-scroll--active');
        } else {
            smoothScroll.classList.remove('smooth-scroll--active');
        }
    });

    smoothScroll.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    });

};

export default scrollUp;