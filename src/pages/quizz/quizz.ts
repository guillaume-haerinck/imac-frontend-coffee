import "./quizz.scss";
import "../../shared/custom-elements/pc-window/pc-window";
import { PCWindow } from "../../shared/custom-elements/pc-window/pc-window";
import "../../shared/custom-elements/pc-icon/pc-icon";
import { PCIcon } from "../../shared/custom-elements/pc-icon/pc-icon";

/* Assets */
const fart = new Audio('assets/audio/fart.mp3');
const xpStartupSound = new Audio('assets/audio/xp-startup.mp3');
const cursor = document.getElementById('cursor');

/* Story events */
document.getElementById("goto-enroll").addEventListener("click", () => {
  var shutdownAudio = new Audio('assets/audio/shutdown.mp3');
  shutdownAudio.play();
  window.location.hash = "enroll"; // Change page
});


/* Utils events */
document.body.addEventListener('mousemove', (event: MouseEvent) => {
  cursor.style.top = event.pageY+"px";
  cursor.style.left = event.pageX+"px";
  cursor.style.transform ="translate(-60px, -20px)";
});


/* One-time events */
document.getElementById('start-button').addEventListener('click',(e)=>{
  document.getElementById("cursor").style.display = 'none';
  document.getElementById('foreground-wrapper').style.cursor = `none`;
  document.getElementById('background-wrapper').style.cursor = `none`;
  (document as any).querySelector('.windows-boot-container').style.display = `block`;
  document.getElementById('background-wrapper').style.backgroundImage = `url(/assets/images/logos/windows-vapor-logo.png), url(assets/images/backgrounds/vapor-beans.gif)`;
  document.getElementById('background-wrapper').style.backgroundSize = `175px, cover`;
  document.getElementById('background-wrapper').style.backgroundPosition = `center, center`;
  document.getElementById('task-bar').style.background = `linear-gradient(104.44deg, #00DBFF -22.29%, #FF00E5 95.68%)`;
  xpStartupSound.play();

  var t = setTimeout(function() {
    document.getElementById('cursor').style.display = `block`;
    document.getElementById('foreground-wrapper').style.cursor = `none`;
    document.getElementById('background-wrapper').style.cursor = `none`;
  }, 5000);
}, {once: true});

document.getElementById('wallpaper').addEventListener('dblclick',(e)=>{
  document.getElementById('background-wrapper').style.backgroundImage = `url(assets/images/icons/wallpaper.jpg)`;
  document.getElementById('background-wrapper').style.backgroundPositionY = `top`;
  document.getElementById('background-wrapper').style.backgroundSize = `cover`;
  document.getElementById('virtual-girl').style.display = `block`;
}, {once: true});

document.getElementById('flight-simulator').addEventListener('dblclick',(e)=>{
  var bipAlert = new Audio('assets/audio/warning-bip.mp3');
  bipAlert.play();
  (document.getElementById('crack') as PCWindow).unhide();
  (document as any).getElementById('youtube-crack').src = `https://www.youtube.com/embed/sODZLSHJm6Q?controls=0&autoplay=1&version=3&enablejsapi=1`;
}, {once: true});

document.getElementById('flash-player').addEventListener('dblclick',(e)=>{
  document.getElementById('flash').style.display = `block`;
  document.getElementById('w-flash-btn').hidden = false;
}, {once: true});

document.getElementById('mypc').addEventListener('dblclick',(e)=>{
  document.getElementById('foreground-wrapper').style.cursor = `url('assets/images/icons/bieber-cursor.cur'), auto`;
  document.getElementById('background-wrapper').style.cursor = `url('assets/images/icons/bieber-cursor.cur'), auto`;
  cursor.style.display = `none`;
  fart.play();
}, {once: true});


/* Open-window events */
document.getElementById('wikipedia').addEventListener('dblclick',(e)=>{
  (document.getElementById('netscape-planet') as PCWindow).unhide();
});

document.getElementById('netscape').addEventListener('dblclick',(e)=>{
  (document.getElementById('netscape-browser') as PCWindow).unhide();
});

document.getElementById('art-gallery').addEventListener('dblclick',(e)=>{
  (document.getElementById('mona-lisa') as PCWindow).unhide();
});


/* Utils functions */
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  // add a zero in front of numbers<10
  m = checkTime(m);
  document.getElementById('time').innerHTML = h + ":" + m;
  var t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();
