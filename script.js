console.log("Hello spotify");

// initilize the Variable
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/3.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/5.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/6.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/7.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/8.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/9.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/10.mp3",
    coverPath: "cover/1.jpg",
  },
];

//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.pause || audioElement.currentTime < 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// listen to event
audioElement.addEventListener("timeupdate", () => {
//   console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//   console.log(progress);
  myProgressBar.value=progress
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value.audioElement
})