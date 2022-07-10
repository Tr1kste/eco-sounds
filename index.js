const mainImg = document.querySelector('.main');
const navItems = document.querySelectorAll('.nav-item');
const navList = document.querySelector('.nav-list');

const audio = document.querySelector('audio');
const playButton = document.querySelector('.play');
let isPlay = false;

//  Меняем активную пункт меню
const changeMenuClassActive = e => {
    navItems.forEach(e => e.classList.remove('active'));
    e.target.classList.toggle('active');
};

//  Меняем фоновое изображение
const changeImageMain = e => {
    if (e.target.dataset.item === 'forest') {
        mainImg.style.backgroundImage = 'url("./assets/img/forest.jpg")'
    }
    else if (e.target.dataset.item === 'solovey') {
        mainImg.style.backgroundImage = 'url("./assets/img/solovey.jpg")'
    }
    else if (e.target.dataset.item === 'drozd') {
        mainImg.style.backgroundImage = 'url("./assets/img/drozd.jpg")'
    }
    else if (e.target.dataset.item === 'zarynka') {
        mainImg.style.backgroundImage = 'url("./assets/img/zarynka.jpg")'
    }
    else if (e.target.dataset.item === 'javoronok') {
        mainImg.style.backgroundImage = 'url("./assets/img/javoronok.jpg")'
    }
    else if (e.target.dataset.item === 'slavka') {
        mainImg.style.backgroundImage = 'url("./assets/img/slavka.jpg")'
    }
};

//  Меняем ссылки на аудиодорожку
const changeAudio = item => {
    document.querySelector('.download-btn').href = `./assets/audio/${item}.mp3`;
    audio.src = `./assets/audio/${item}.mp3`;
};

//  Воспроизведение и остановка аудио
const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
};
const pauseAudio = () => {
    audio.pause();
    isPlay = false;
};

//  Меняем кнопку play/pause
const changeButtonActive = () => {
    if (isPlay === true) {
        playButton.classList.remove('play')
        playButton.classList.add('pause')
    }
    else if (isPlay === false) {
        playButton.classList.remove('pause')
        playButton.classList.add('play')
    }
};

//  Переключатель
playButton.onclick = function () {
    (isPlay) ? pauseAudio() : playAudio();
    changeButtonActive();
};

//  Слушатель с активацией функций
navList.addEventListener('click', e => {
    const currentItem = e.target.closest('.nav-item').dataset.item;
    changeMenuClassActive(e);
    changeImageMain(e);
    changeAudio(currentItem);
    playAudio();
    changeButtonActive();
});