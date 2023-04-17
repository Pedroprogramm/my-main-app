
    const carouselItem = document.querySelectorAll('.item-cards-carousel'),
    arrowLeft = document.querySelector('.bi-arrow-left-square'),
    arrowRight = document.querySelector('.bi-arrow-right-square');
    let firstItem = 0,
        lastItem = 4;

    arrowRight.addEventListener('click', (e) => {
        if (e.target === arrowLeft) {
            carouselItem[firstItem].classList.add('hidden-left-carousel');
                        carouselItem[lastItem].classList.remove('hidden-right-carousel');
                        firstItem -= 1;
                        lastItem -= 1;
                        console.log(lastItem, firstItem)
                        return lastItem
                        
        } else if (e.target === arrowRight) {
            carouselItem[firstItem].classList.remove('hidden-left-carousel');
                        carouselItem[lastItem].classList.add('hidden-right-carousel');
                        firstItem += 1;
                        lastItem += 1;
                        console.log(lastItem, firstItem)
                        return (lastItem, firstItem)
        }
        return lastItem
    })
    arrowLeft.addEventListener('click', (e) => {
        if (e.target === arrowLeft) {
            carouselItem[firstItem].classList.add('hidden-left-carousel');
                        carouselItem[lastItem].classList.remove('hidden-right-carousel');
                        firstItem -= 1;
                        lastItem -= 1;
                        console.log(lastItem, firstItem)
                        return lastItem
                        
        } else if (e.target === arrowRight) {
            carouselItem[firstItem].classList.remove('hidden-left-carousel');
                        carouselItem[lastItem].classList.add('hidden-right-carousel');
                        firstItem += 1;
                        lastItem += 1;
                        console.log(lastItem, firstItem)
                        return (lastItem, firstItem)
        }
        return lastItem
    })
    