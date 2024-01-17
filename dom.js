window.addEventListener('DOMContentLoaded', () => {
    console.log('Opened Sucessfully')
})

const darkLight = document.querySelector('.switch-theme');

darkLight.addEventListener('click', (e) => {
   
    document.body.classList.toggle('active');
   console.log('tapped')
})

// html tags here
const imageSlides = document.querySelectorAll('.slider-image');
const nameImgSld = document.getElementById('name-img');
const descriptionImg = document.getElementById('description-img');
// scripts DOM manipulation variables
let imageIndex = 0;

const imageBannerText = [
//   {name: '', description: ''},
   { name: 'dumaguete salsalani', description: 'Ex ea reprehenderit ex pariatur labore consectetur deserunt eu anim do nisi consectetur nisi. Aliquip sit irure occaecat excepteur do deserunt Lorem quis aliqua culpa ad. Lorem commodo nostrud consectetur id pariatur ea proident elit ad qui reprehenderit nisi voluptate adipisicing. Eiusmod sit ad cupidatat dolor nostrud in qui excepteur dolore. Velit proident magna tempor est. Nulla magna deserunt commodo do fugiat'
}, {name: 'squirting falls', description: 'Proident consectetur Lorem ex incididunt velit exercitation occaecat aliqua sunt excepteur tempor reprehenderit ea eiusmod. Cillum sunt occaecat deserunt deserunt anim consectetur. Nostrud dolor sint esse velit. Ex Lorem consequat veniam fugiat occaecat in non esse non ipsum. Reprehenderit sint tempor ex amet voluptate eiusmod deserunt non irure enim ullamco officia non. Quis exercitation duis labore consequat aliqua sint veniam veniam commodo.'
}, {name: 'suicide cliff', description: 'Officia minim proident culpa consequat nisi in minim incididunt minim qui. Cillum sunt irure sint Lorem. Sunt culpa proident duis aute in ea quis id.'
}, {name:  'dominican republic', description: 'Reprehenderit amet minim laboris duis eiusmod exercitation magna. Ex eiusmod occaecat reprehenderit anim. Ad sunt magna laborum officia nulla culpa nostrud reprehenderit nisi ut Lorem. Occaecat occaecat non Lorem dolore adipisicing reprehenderit qui ea labore minim amet.'
}];


setInterval(() => {

    imageSlides[imageIndex].classList.remove('show-img');
    nameImgSld.innerText = imageBannerText[imageIndex].name
    descriptionImg.innerText = imageBannerText[imageIndex].description
    // increment 
    imageIndex++

    //if lol. i use switch case instead because it is more efficient.
    switch (true) {
        case imageIndex >= imageSlides.length:
        imageIndex = 0;
        break;
    }

    //add the animation class.
    imageSlides[imageIndex].classList.add('show-img');
}, 3000)

// html variales

const toggle_nav = document.querySelector('.open_mobile');
const asideNav = document.querySelector('.aside-nav')

//js functions
/*
toggle_nav.addEventListener('click', () => {
    asideNav.classList.toggle('on');
}) */

function toggleNav(kill) {

    switch (kill) {
        case 'open':
            asideNav.style.width = '12em'
            console.log('open side nav')
            break;
            case 'close':
                asideNav.style.width = '0'
                console.log('closed')
                break;
            default: asideNav.style.width = '0'
            console.log('this nav are supposed to close ;[')
    }


}
// MAIN WINDOW TARGET FUNCTION IN DOM 
window.addEventListener('click', (e) => {

   // MAIN WINDOW TARGET FUNCTION IN DOM 
window.addEventListener('click', (e) => {
    if (!asideNav.contains(e.target) && e.target !== toggle_nav) {
        toggleNav('close');
        console.log('closed')
    }
});

})

console.log('lol')