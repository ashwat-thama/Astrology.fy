let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let item = document.querySelectorAll('.item');


menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

function linkAction (){
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

item.forEach(n => n.addEventListener('click' , linkAction));

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let AudioBtn = document.querySelector('#AudioBtn');
let audio = document.getElementById('audio');
AudioBtn.onclick = () =>{
  let name = AudioBtn.classList[1]
  if (name == 'fa-play'){
    AudioBtn.classList.remove(name);
    AudioBtn.classList.add('fa-pause');
    audio.play();
  }
  if (name == 'fa-pause'){
    audio.pause();
    AudioBtn.classList.remove('fa-pause');
    AudioBtn.classList.add('fa-play');
  }
}
