const comments= () => {
    const reviews = document.getElementById('reviews'),
        rowReviews = reviews.querySelector('.row');

    const getData = () => {
        const request = new XMLHttpRequest();
        request.open('GET', './comments.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('readystatechange', () => {

            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                const newData = data.comments.map((item) => {return item});

                let tmpNewData = newData.slice(1);
                let tmpItem = newData[0];
                console.log(tmpNewData);
                console.log(tmpItem);
                console.log(tmpNewData.push(tmpItem));

                data.comments.forEach((item) => {
                    console.log(item);
                    const {image, author, comment, } = item;
                    rowReviews.innerHTML += `
                            <div class="col-sm-offset-1 col-xs-12 comments-container">
                                <div class="review-margin-bottom row comment-item">
                                    <div class="col-xs-3 col-sm-2">
                                        <div class="review-user">
                                            <img src="${image}" alt="" class="img-responsive avatar">
                                        </div>
                                    </div>
                                    <div class="col-xs-9 col-sm-9">
                                        <div class="review-inner review-green review-arrow review-arrow-left">
                                            <p class="text-normal">${author}</p>
                                            <p>${comment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                });
            }
        });
    };

    getData();
};

export default comments;