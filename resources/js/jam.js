var previousRandomIndex = 0;

function playMe(file) {

  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src='resources/audio/drones/' + file + '.wav';
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);
  
}

function randomKey() {

  fetch('https://groovyjen.com/resources/json/theory/availablekeys.json')
      .then((response) => response.json())
      .then((json) =>  randomKeyPicker(json));


}


function randomKeyPicker(json) {

  const pkey = document.getElementById('randomkey');

  var randSelect = Math.floor(Math.random() * 30) + 1;

  //ensure it is different from last question
  while(randSelect == previousRandomIndex) {
    randSelect = Math.floor(Math.random() * 30) + 1;
  }

  previousRandomIndex = randSelect;



  pkey.innerHTML = json['key'+randSelect];

}