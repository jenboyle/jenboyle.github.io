function playMe(file) {

  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src='resources/audio/drones/' + file + '.wav';
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);
  
}

function randomScale() {

  fetch('https://groovyjen.com/resources/json/theory/availablescales.json')
      .then((response) => response.json())
      .then((json) =>  randomScalePicker(json));


}


function randomScalePicker(json) {

  const pscale = document.getElementById('randomscale');

  var randSelect = Math.floor(Math.random() * 30) + 1;


  pscale.innerHTML = json['scale'+randSelect];

}