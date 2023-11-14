function playMe(file) {

  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src='resources/audio/drones/' + file + '.wav';
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);
  
}