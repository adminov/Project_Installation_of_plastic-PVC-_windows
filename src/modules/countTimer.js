const countTimer = (deadLine = '28 October 2021') => {
    const timeDay = document.querySelectorAll('.count_1 span'),
        timeHours = document.querySelectorAll('.count_2 span'),
        timeMinutes = document.querySelectorAll('.count_3 span'),
        timeSeconds = document.querySelectorAll('.count_4 span');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            second = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            let day = Math.floor(timeRemaining / 60 / 60 /24);

            return {timeRemaining, day, hours, minutes, second}
    };

    let interval;
    const updateClock = () => {
        const timer = getTimeRemaining();
        if (timer.timeRemaining > 0) {
            timeDay.forEach((elem) => {
                elem.textContent = ('0' + timer.day).slice(-2);
            });
            timeHours.forEach((elem) => {
                elem.textContent = ('0' + timer.hours).slice(-2);
            });

            timeMinutes.forEach((elem) => {
                elem.textContent = ('0' + timer.minutes).slice(-2);
            });

            timeSeconds.forEach((elem) => {
                elem.textContent = ('0' + timer.second).slice(-2);
            });
        } else {
            clearInterval(interval);
            timeDay.forEach((elem) => {
                elem.textContent = '00';
            });
            timeHours.forEach((elem) => {
                elem.textContent = '00';
            });

            timeMinutes.forEach((elem) => {
                elem.textContent = '00';
            });

            timeSeconds.forEach((elem) => {
                elem.textContent = '00';
            });
        }
    };
    updateClock();
    interval = setInterval(updateClock, 1000);
};

export default countTimer;