
window.addEventListener('keydown', function(e){
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('is-played');
  // setTimeout(() => {
  //   key.classList.remove('is-played');
  // }, 200);
});









function removeTransition(e){
  if (e.propertyName !== 'transform') return;
  this.classList.remove('is-played')
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend",removeTransition));