let previousRandomIndex:number = 0;

type Pattern = {
  pattern: string,
  beat: string
}

const patterns: Pattern[] = [];
function makePatternList():void {
  patterns.push({'pattern':'D,no,D,no,D,no,D,no', 'beat': '1,&,2,&,3,&,4,&'});
  patterns.push({'pattern':'D,no,D,no,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'});
  patterns.push({'pattern':'D,no,D,U,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'});
  patterns.push({'pattern':'D,U,D,U,D,U,D,U', 'beat': '1,&,2,&,3,&,4,&'});
  patterns.push({'pattern':'D,U,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'});
  patterns.push({'pattern':'D,no,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'});
  patterns.push({'pattern':'D,no,D,no,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'});
  patterns.push({'pattern':'D,no,D,U,no,U,D,U', 'beat': '1,&,2,&,3,&,4,&'});
  patterns.push({'pattern':'D,no,D,no,D,no,D,U,D,no,D,no,D,no,D,U', 'beat': '1,e,&,a,2,e,&,a,3,e,&,a,4,e,&,a'});
  patterns.push({'pattern':'D,no,D,no,D,no,no,U,D,U,D,no,D,no,D,U', 'beat': '1,e,&,a,2,e,&,a,3,e,&,a,4,e,&,a'});
}
makePatternList();

type Progression = {
  progression: string,
  num: string
}

const progressions: Progression[] = [];
function makeProgressionList():void {
  progressions.push({'progression': 'I,V,VI,IV', 'num': '1,5,6,4'});
  progressions.push({'progression': 'I,IV,V', 'num': '1,4,5'});
  progressions.push({'progression': 'I,VI,IV,V', 'num': '1,6,4,5'});
  progressions.push({'progression': 'I,VI,III,VII', 'num': '1,6,3,7'});
  progressions.push({'progression': 'I,VI,II,V', 'num': '1,6,2,5'});
  progressions.push({'progression': 'I,IV', 'num': '1,4'});
  progressions.push({'progression': 'IV,V', 'num': '4,5'});
  progressions.push({'progression': 'I,V,VI,IV', 'num': '1,5,6,4'});
  progressions.push({'progression': 'I,I,I,I,IV,IV,I,I,V,V,I,I', 'num': '1,1,1,1,4,4,1,1,5,5,1,1'});
  progressions.push({'progression': 'II,V,I', 'num': '2,5,1'});
  progressions.push({'progression': 'I,IV,VI,V', 'num': '1,4,6,5'});
  progressions.push({'progression': 'I,III,IV,V', 'num': '1,3,4,5'});
  progressions.push({'progression': 'I,V,VI,III,IV,I,IV,V', 'num': '1,5,6,3,4,1,4,5'});
  progressions.push({'progression': 'I,IV,V,IV', 'num': '1,4,5,4'});
}
makeProgressionList();

const spices: string[] = [];
function makeSpiceList():void {
  spices.push('Add a muted note');
  spices.push('Add a slap');
  spices.push('Add a pop');
  spices.push('Add a slap and pop');
  spices.push('Add a harmonic');
  spices.push('Add a slide');
  spices.push('Add a bend note');
  spices.push('Add an open note');
  spices.push('Play notes quiet');
  spices.push('Play note(s) louder (accent)');
  spices.push('Play notes staccato');
  spices.push('Trill a note');
  spices.push('Vibrato a note');
}
makeSpiceList();
function playMe(file:string) {

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

  const pkey = document.getElementById('randomkey')!;
  pkey.innerHTML = '';

  var randSelect = Math.floor(Math.random() * 30) + 1;

  //ensure it is different from last question
  while(randSelect == previousRandomIndex) {
    randSelect = Math.floor(Math.random() * 30) + 1;
  }

  previousRandomIndex = randSelect;
          //const p = document.createElement("p");
  if(json.hasOwnProperty('key' + randSelect + 'link')) {


    const linkkey = document.createElement("a");
    linkkey.href="basstheory.html?selection=" + json['key' + randSelect + 'link'];
    linkkey.textContent = json['key'+randSelect];
    linkkey.className = 'options';
            pkey.appendChild(linkkey);
        } else {
  pkey.textContent = json['key'+randSelect];
  }

  //pkey.appendChild(p);

}

function randomStrumPattern() {
  var randompattern = Math.floor(Math.random() * patterns.length);

  var guitarpattern = document.getElementById('randomstrum')!;
  guitarpattern.innerHTML = '';

  const strum_table = document.createElement("table");
  //const strum_caption = document.createElement("caption");
  //strum_caption.textContent = "Strum Pattern";
  //strum_table.appendChild(strum_caption);
  strum_table.className = 'randomtables';
  const beat_tr = document.createElement("tr");

  const beat = patterns[randompattern]['beat'].split(',');

  for(var i=0; i<beat.length; i++){
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

  for(var i=0; i<pattern.length; i++){
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
      makePatternList();
    }


}


function randomChordProgression() {
  var randomprogression = Math.floor(Math.random() * progressions.length);

  var progression = document.getElementById('randomprogression')!;
  progression.innerHTML = '';

  const progression_table = document.createElement("table");
  //const progression_caption = document.createElement("caption");
  //progression_caption.textContent = "Chord Progression";
  //progression_table.appendChild(progression_caption);
  progression_table.className = 'randomtables';
  const roman_tr = document.createElement("tr");

  const roman = progressions[randomprogression]['progression'].split(',');

  for(var i=0; i<roman.length; i++){
      const progtd = document.createElement("td");
      progtd.textContent = roman[i];
      progtd.className = 'progressioncolour';

      roman_tr.appendChild(progtd);
    }
    progression_table.appendChild(roman_tr);

  const num_tr = document.createElement("tr");
  const num = progressions[randomprogression]['num'].split(',');

  for(var i=0; i<num.length; i++){
    const progtd = document.createElement("td");
      progtd.textContent = num[i];


    num_tr.appendChild(progtd);
  }
  progression_table.appendChild(num_tr);

  progression.appendChild(progression_table);


    //remove item
    progressions.splice(randomprogression, 1);
    if(progressions.length == 0) {
      //repopulate array
      makeProgressionList();
    }


}function randomSpice() {

  var randomspice = Math.floor(Math.random() * spices.length);

  var spice = document.getElementById('randomspice')!;
  spice.innerHTML = spices[randomspice];

  spices.splice(randomspice, 1);
  if(spices.length == 0) {
    makeSpiceList();
  }

}
