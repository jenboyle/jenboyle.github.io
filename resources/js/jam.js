var previousRandomIndex = 0;

var patterns = [{'pattern':'D,no,D,no,D,no,D,no', 'beat': '1,&,2,&,3,&,4,&'},
                  {'pattern':'D,no,D,no,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                  {'pattern':'D,no,D,U,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                  {'pattern':'D,U,D,U,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                  {'pattern':'D,U,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                  {'pattern':'D,no,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                  {'pattern':'D,no,D,no,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                  {'pattern':'D,no,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                  {'pattern':'D,no,D,no,D,no,D,U,D,no,D,no,D,no,D,U', 'beat': '1,e,&,a,2,e,&,a,3,e,&,a,4,e,&,a'},
                  {'pattern':'D,no,D,no,D,no,no,U,D,U,D,no,D,no,D,U', 'beat': '1,e,&,a,2,e,&,a,3,e,&,a,4,e,&,a'}];

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

function randomStrumPattern() {
  var randompattern = Math.floor(Math.random() * patterns.length);

  var guitarpattern = document.getElementById('randomstrum');
  guitarpattern.innerHTML = '';

  const strum_table = document.createElement("table");
  const strum_caption = document.createElement("caption");
  strum_caption.textContent = "Strum Pattern";
  strum_table.appendChild(strum_caption);
  strum_table.className = 'strum';
  const beat_tr = document.createElement("tr");

  const beat = patterns[randompattern]['beat'].split(',');

  for(i=0; i<beat.length; i++){
      const strumtd = document.createElement("td");
      strumtd.textContent = beat[i];
      if ((beat[i] == '1') || (beat[i] == '2') || (beat[i] == '3') || (beat[i] == '4')) {
        strumtd.className = 'strumcolour';
        //another nice one: #6537c8
      }
      beat_tr.appendChild(strumtd);
    }
    strum_table.appendChild(beat_tr);

  const strum_tr = document.createElement("tr");
  const pattern = patterns[randompattern]['pattern'].split(',');

  for(i=0; i<pattern.length; i++){
    const strumtd = document.createElement("td");
    if(pattern[i] == 'D') {
      strumtd.textContent = String.fromCodePoint(0x2B07);
      //String.fromCodePoint(0x1F53B);
      //String.fromCodePoint(0x25BF);
    } else if(pattern[i] == 'U') {
      strumtd.textContent = String.fromCodePoint(0x1F53A);
    }

    strum_tr.appendChild(strumtd);
  }
  strum_table.appendChild(strum_tr);


  //need to choose beat too
  //guitarpattern.textContent = patterns[randompattern]['pattern'];

  guitarpattern.appendChild(strum_table);


    //remove item
    patterns.splice(randompattern, 1);
    if(patterns.length == 0) {
      //repopulate array
      patterns = [{'pattern':'D,no,D,no,D,no,D,no', 'beat': '1,&,2,&,3,&,4,&'},
                        {'pattern':'D,no,D,no,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                        {'pattern':'D,no,D,U,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                        {'pattern':'D,U,D,U,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                        {'pattern':'D,U,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                        {'pattern':'D,no,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                        {'pattern':'D,no,D,no,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                        {'pattern':'D,no,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'},
                        {'pattern':'D,no,D,no,D,no,D,U,D,no,D,no,D,no,D,U', 'beat': '1,e,&,a,2,e,&,a,3,e,&,a,4,e,&,a'},
                        {'pattern':'D,no,D,no,D,no,no,U,D,U,D,no,D,no,D,U', 'beat': '1,e,&,a,2,e,&,a,3,e,&,a,4,e,&,a'}];
    }


}