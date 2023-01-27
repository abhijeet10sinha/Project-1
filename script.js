console.log("welcome to DEBO music");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Stronger", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Unstopable", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "Villain", filePath: "3.mp3", coverPath: "3.jpeg" },
    { songName: "Hall of Fame", filePath: "4.mp3", coverPath: "4.png" },
    { songName: "Whatever It Takes", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Legends Never Die", filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: "Unforgetable", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "Face Off", filePath: "8.mp3", coverPath: "8.jfif" },
    { songName: "Gasolina", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "Bad Lier", filePath: "10.mp3", coverPath: "10.jpg" },
    { songName: "Royalty", filePath: "11.mp3", coverPath: "11.jpg" },
];

songItems.forEach((Element, i) => {
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

