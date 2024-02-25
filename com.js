const imageThList = document.querySelectorAll('.image-th');
const texts_main = document.querySelectorAll('.z-up');
const texts_desc = document.querySelectorAll('.y-ux')

imageThList.forEach((imageTh, index) => {
    imageTh.addEventListener('mouseover', () => {
        console.log('hovered' + index);

        texts_main[index].classList.add('upp');
        texts_desc[index].classList.add('upp');
    });

    imageTh.addEventListener('mouseout', () => {
        texts_main[index].classList.remove('upp');
        texts_desc[index].classList.remove('upp');
    });
});

