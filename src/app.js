const slider_items = document.querySelectorAll('.slider-item');
const slider_line = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    slider_line.style.width = width*slider_items.length + 'px';
    slider_items.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = "auto";
    });
    console.log(width);
}

window.addEventListener('resize', init);

init();

function rollSlider() {
    count++;
    if(count > slider_items.length-1){
        count = 0;
    }
    slider_line.style.transform = 'translate(-' + count*width+'px)';
}

setInterval(rollSlider, 2000);