const imageThList = document.querySelectorAll('.image-th');
const texts_main = document.querySelectorAll('.z-up');
const texts_desc = document.querySelectorAll('.y-ux');

const imageHover = [
  {
    electricGuitar: ['images/images slide in main/slider-th01.jpg', 'images/images slide in main/slider-th02.jpg', 'images/images slide in main/slider-th03.jpg'],
  },
  {
    acousticGuitar: ['images/images slide in main/slider-th04.jpg', 'images/images slide in main/slider-th05.jpg', 'images/images slide in main/slider-th06.jpg'],
  },
  {
    bassGuitar: ['images/images slide in main/slider-th07.jpg', 'images/images slide in main/slide-th08.jpg', 'images/images slide in main/slider-th09.jpg'],
  },
];

let dnx = 0;


// FUNCTIONS FOR THE ABSOLUTE SLIDERS IN MAIN SEMANTIC SECTION
imageThList.forEach((imageTh, index) => {
  imageTh.addEventListener('mouseover', () => {
    console.log('hovered' + index);

    texts_main[index].classList.add('upp');
    texts_desc[index].classList.add('upp');
    hover_over(index);
  });

  imageTh.addEventListener('mouseout', () => {
    texts_main[index].classList.remove('upp');
    texts_desc[index].classList.remove('upp');
    stopHoverLoad()
  });
});

function hover_over(index) {
  hoverOn = setInterval(() => {
    const guitarType = Object.keys(imageHover[index])[0];
    const imageUrl = imageHover[index][guitarType][dnx];
    imageThList[dnx].classList.add('opacity-load');

    imageThList[index].src = imageUrl;
console.log(guitarType)
    dnx++;
    if (dnx === imageHover[index][guitarType].length) {
      dnx = 0;
    }

    // console.log(imageHover[index][guitarType][dnx]);

  }, 800);
}

function stopHoverLoad() {
  imageThList[dnx].classList.remove('light-rdc')
 clearInterval(hoverOn)
}
