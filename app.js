  const carouseSlide = document.querySelector('.carousel-slide');
console.log(carouseSlide);
const carouseImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.getElementById('prevBtn');

const nextBtn = document.getElementById('nextBtn');



//Counter
let counter = 1 ;
const size = carouseImages[0].clientWidth;

// the orginal image
carouseSlide.style.transform = 'translateX(-900px)';



// Button Listener
nextBtn.addEventListener('click', () =>{
    if(counter >= carouseImages.length - 1 ) return;
    carouseSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouseSlide.style.transform = 'translateX('+( - size * counter) + 'px)';

})

prevBtn.addEventListener('click', () =>{
    if(counter <= 0 ) return;
    carouseSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouseSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouseSlide.addEventListener('transitionend', () => {
    if(carouseImages[counter].id === 'lastClone'){
        carouseSlide.style.transition = "none";
        counter = carouseImages.length - 2;
        carouseSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(carouseImages[counter].id === 'firstClone'){
        carouseSlide.style.transition = "none";
        // 6 - 5 = 1 , back to the orginal image, then click, counter ++ ,... so on
        counter = carouseImages.length - counter;
        carouseSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})


