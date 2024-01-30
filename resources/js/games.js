var nextSelectionArr = [{'id':'eartraining','games':[{'gameid1':'dronetest', 'gametext1':'Drone Test'}]},
                        {'id':'musictheory','games':[{'gameid1':'relatives', 'gametext1':'Relatives Test', 'gamemethod1':'relativesGame();'},
                          {'gameid2':'circleoffifths', 'gametext2':'Circle of Fifths', 'gamemethod2':'circleOfFifthsGame();'}]},
                          {'id':'notation','games':[{'gameid1':'easy', 'gametext1':'Easy', 'gamemethod1':'notationGame("easy");'}]}];

var relativesfull = [{'key':'Ab Major', 'rel': 'F Minor'}, {'key':'A Major', 'rel':'F# Minor'}, {'key':'Bb Major', 'rel': 'G Minor'}, {'key':'B Major', 'rel':'G# Minor'},
                 {'key':'C Major', 'rel': 'A Minor'}, {'key':'Db Major', 'rel': 'Bb Minor'}, {'key':'D Major', 'rel':'B Minor'}, {'key':'Eb Major', 'rel':'C Minor'},
                 {'key':'E Major', 'rel': 'C# Minor'}, {'key':'F Major', 'rel': 'D Minor'}, {'key':'Gb Major', 'rel': 'Eb Minor'}, {'key':'G Major', 'rel': 'E Minor'},
                 {'key':'F Minor', 'rel': 'Ab Major'}, {'key':'F# Minor', 'rel':'A Major'}, {'key':'G Minor', 'rel': 'Bb Major'}, {'key':'G# Minor', 'rel':'B Major'},
                 {'key':'A Minor', 'rel': 'C Major'}, {'key':'Bb Minor', 'rel': 'Db Major'}, {'key':'B Minor', 'rel':'D Major'}, {'key':'C Minor', 'rel':'Eb Major'},
                 {'key':'C# Minor', 'rel': 'E Major'}, {'key':'D Minor', 'rel': 'F Major'}, {'key':'Eb Minor', 'rel': 'Gb Major'}, {'key':'E Minor', 'rel': 'G Major'}];

var relatives = [{'key':'Ab Major', 'rel': 'F Minor'}, {'key':'A Major', 'rel':'F# Minor'}, {'key':'Bb Major', 'rel': 'G Minor'}, {'key':'B Major', 'rel':'G# Minor'},
                 {'key':'C Major', 'rel': 'A Minor'}, {'key':'Db Major', 'rel': 'Bb Minor'}, {'key':'D Major', 'rel':'B Minor'}, {'key':'Eb Major', 'rel':'C Minor'},
                 {'key':'E Major', 'rel': 'C# Minor'}, {'key':'F Major', 'rel': 'D Minor'}, {'key':'Gb Major', 'rel': 'Eb Minor'}, {'key':'G Major', 'rel': 'E Minor'},
                 {'key':'F Minor', 'rel': 'Ab Major'}, {'key':'F# Minor', 'rel':'A Major'}, {'key':'G Minor', 'rel': 'Bb Major'}, {'key':'G# Minor', 'rel':'B Major'},
                 {'key':'A Minor', 'rel': 'C Major'}, {'key':'Bb Minor', 'rel': 'Db Major'}, {'key':'B Minor', 'rel':'D Major'}, {'key':'C Minor', 'rel':'Eb Major'},
                 {'key':'C# Minor', 'rel': 'E Major'}, {'key':'D Minor', 'rel': 'F Major'}, {'key':'Eb Minor', 'rel': 'Gb Major'}, {'key':'E Minor', 'rel': 'G Major'}];

var circle = [{'key':'C', 'sign': 'no sharps or flats', 'twowrong': '1 sharp,1 flat'},
              {'key':'F', 'sign': '1 flat', 'twowrong': '1 sharp,3 flats'},
              {'key':'F_TOGGLE', 'sign': '1 flat', 'flatsharp': 'Bb', 'twowrong': 'Eb,Ab'},
              {'key':'G', 'sign': '1 sharp', 'twowrong': 'no sharps or flats,3 flats'},
              {'key':'G_TOGGLE', 'sign': '1 sharp', 'flatsharp': 'F#', 'twowrong': 'C#,G#'},
              {'key':'A', 'sign': '3 sharps', 'twowrong': 'no sharps or flats,1 sharp'},
              {'key':'A_TOGGLE', 'sign': '3 sharps', 'flatsharp': 'F# C# G#', 'twowrong': 'F# C# D#,F# G# A#'},
              {'key':'D', 'sign': '2 sharps', 'twowrong': 'no sharps or flats,1 sharp'},
              {'key':'D_TOGGLE', 'sign': '2 sharps', 'flatsharp': 'F# C#', 'twowrong': 'C# G#,F# G#'},
              {'key':'E', 'sign': '4 sharps', 'twowrong': 'no sharps or flats,3 sharps'},
              {'key':'E_TOGGLE', 'sign': '4 sharps', 'flatsharp': 'F# C# G# D#', 'twowrong': 'C# G# A# F#,F# G# C# E#'},
              {'key':'Eb', 'sign': '3 flats', 'twowrong': '1 flat,2 flats'},
              {'key':'Eb_TOGGLE', 'sign': '3 flats', 'flatsharp': 'Bb Eb Ab', 'twowrong': 'Eb Ab Db,Bb Db Ab'},
              {'key':'Bb', 'sign': '2 flats', 'twowrong': '1 flat,3 flats'},
              {'key':'Bb_TOGGLE', 'sign': '2 flats', 'flatsharp': 'Bb Eb', 'twowrong': 'Eb Ab,Bb Db'},
              {'key':'Ab', 'sign': '4 flats', 'twowrong': '1 flat,2 flats'},
              {'key':'Ab_TOGGLE', 'sign': '4 flats', 'flatsharp': 'Bb Eb Ab Db', 'twowrong': 'Eb Ab Cb Fb,Bb Db Gb Ab'},
              {'key':'F#', 'sign': '6 sharps', 'twowrong': '3 sharps,4 sharps'},
              {'key':'F#_TOGGLE', 'sign': '6 sharps', 'flatsharp': 'F# C# G# D# A# E#', 'twowrong': 'F# C# G# D# E# B#,B# E# A# D# C# G#'},
              {'key':'Gb', 'sign': '6 flats', 'twowrong': '3 flat,4 flats'},
              {'key':'Gb_TOGGLE', 'sign': '6 flats', 'flatsharp': 'Bb Eb Ab Db Gb Cb', 'twowrong': 'Bb Db Eb Ab Cb Fb,Bb Db Gb Ab Eb Fb'},
              {'key':'B', 'sign': '5 sharps', 'twowrong': '3 sharps,4 sharps'},
              {'key':'B_TOGGLE', 'sign': '5 sharps', 'flatsharp': 'F# C# G# D# A#', 'twowrong': 'C# G# D# E# B#,B# E# A# D# C#'},
              {'key':'Db', 'sign': '5 flats', 'twowrong': '3 flat,4 flats'},
              {'key':'Db_TOGGLE', 'sign': '5 flats', 'flatsharp': 'Bb Eb Ab Db Gb', 'twowrong': 'Bb Eb Ab Cb Fb,Bb Db Gb Eb Fb'},
              {'key':'C#', 'sign': '7 sharps', 'twowrong': '1 sharps,5 sharps'},
              {'key':'C#_TOGGLE', 'sign': '7 sharps', 'flatsharp': 'F# C# G# D# A# E# B#', 'twowrong': 'F# C# G# D# A# E# B# C,B# E# A# D# C# G# D#'}];

//var circleSigns = ['no sharps or flats', '1 flat', '1 sharp', '2 sharps', '3 sharps', '4 sharps'];
// future have intermediate beginner advanced change the question to not say how many
//var circleFlatSharps = ['Bb', 'F#', 'F# C# G#', 'F# C#', 'F# C# G# D#'];

var previousRelative = '';
var loadedGame = '';

var notationeasycounter = 0;



// or do you want to know the answer, answers right out of

function showNextGameSelection(game) {

  //hide first set buttons
  //document.getElementById('eartraining').style.display = "none";
  document.getElementById('musictheory').style.display = "none";
  document.getElementById('notation').style.display = "none";
  

  //show next button set
  var gamediv = document.getElementById('gameselection');


  for (i=0; i<nextSelectionArr.length; i++) {


      if (nextSelectionArr[i].id == game) {
        for (j=0; j<nextSelectionArr[i].games.length; j++) {
          var counter = j+1;

          var button = document.createElement("button");
          button.className = 'gamebuttons';
          var idtext = 'gameid' + counter;
          var text = 'gametext' + counter;
          var method = 'gamemethod' + counter;
          button.id = nextSelectionArr[i].games[j][idtext];//'relativeminor';
          button.type = 'button';
          button.textContent = nextSelectionArr[i].games[j][text];//'Relative Minor';

          if(nextSelectionArr[i].games[j][method] != undefined) {
            button.setAttribute('onclick','javascript:' + nextSelectionArr[i].games[j][method]);
          }

          gamediv.appendChild(button);
        }
      }
  }

  var returnbutton = document.createElement("button");
  returnbutton.className = 'gamebuttons';
  returnbutton.id = 'return';
  returnbutton.type = 'button';
  returnbutton.textContent = 'All Games';
  //returnbutton.onclick = "games.html";
  returnbutton.setAttribute('onclick','javascript:window.location="games.html";');

  var gamereturn = document.getElementById('gamereturn');
  gamereturn.appendChild(returnbutton);

}

function relativesGame() {
  clearGameSpace();
  loadedGame = 'Relatives';
  //randomize the game
  relatives.sort(function(){
    return 0.5 - Math.random();
  });

  var gamemain = document.getElementById('gamemain');
  var gameanswers = document.getElementById('gameanswers');

  console.log('relativvvveslen' + relatives.length);

  //need a random 0-23 rel length 24
  var randomscale = Math.floor(Math.random() * relatives.length);

  var relativequestion = document.createElement("div");
  relativequestion.textContent = 'What is the relative key of ' + relatives[randomscale]['key'] + '?' ;

  gamemain.appendChild(relativequestion);

  var relativeanswer = relatives[randomscale]['rel'];



  for (var i=0; i<24; i++) {
    var qbutton = document.createElement("button");
    qbutton.className = 'answerbuttons';
    //qbutton.id = 'relatives
    qbutton.type = 'button';
    qbutton.textContent = relativesfull[i].key;
    var ansmethod = 'javascript:checkAnswer("' + relativeanswer + '", "' + relativesfull[i].key + '","javascript:relativesGame()");';
    qbutton.setAttribute('onclick',ansmethod);
    gameanswers.appendChild(qbutton);
  }

  //remove item
  relatives.splice(randomscale, 1);
  if(relatives.length == 0) {
    //repopulate array
    relatives = [{'key':'Ab Major', 'rel': 'F Minor'}, {'key':'A Major', 'rel':'F# Minor'}, {'key':'Bb Major', 'rel': 'G Minor'}, {'key':'B Major', 'rel':'G# Minor'},
                 {'key':'C Major', 'rel': 'A Minor'}, {'key':'Db Major', 'rel': 'Bb Minor'}, {'key':'D Major', 'rel':'B Minor'}, {'key':'Eb Major', 'rel':'C Minor'},
                 {'key':'E Major', 'rel': 'C# Minor'}, {'key':'F Major', 'rel': 'D Minor'}, {'key':'Gb Major', 'rel': 'Eb Minor'}, {'key':'G Major', 'rel': 'E Minor'},
                 {'key':'F Minor', 'rel': 'Ab Major'}, {'key':'F# Minor', 'rel':'A Major'}, {'key':'G Minor', 'rel': 'Bb Major'}, {'key':'G# Minor', 'rel':'B Major'},
                 {'key':'A Minor', 'rel': 'C Major'}, {'key':'Bb Minor', 'rel': 'Db Major'}, {'key':'B Minor', 'rel':'D Major'}, {'key':'C Minor', 'rel':'Eb Major'},
                 {'key':'C# Minor', 'rel': 'E Major'}, {'key':'D Minor', 'rel': 'F Major'}, {'key':'Eb Minor', 'rel': 'Gb Major'}, {'key':'E Minor', 'rel': 'G Major'}];
  }

  showHelp();
}

function notationGame(level){
  clearGameSpace();
  loadedGame = 'Notation';

  

  var notationimageseasy = ["resources/images/games/notation/slap_an_e.jpg", "resources/images/games/notation/slap_pop_e_g.jpg"];
  var gamemain = document.getElementById('gamemain');
  var img = document.createElement('img');
  img.src = notationimageseasy[notationeasycounter];
  gamemain.appendChild(img);

  var nextq = document.createElement("a");
    nextq.href = 'javascript:notationGame("Easy")';
    nextq.textContent = String.fromCodePoint('9193');
    nextq.className += 'gamebutton';
    var gameanswer = document.getElementById('gameanswer');
    gameanswer.appendChild(nextq);

  notationeasycounter++;
  if (notationeasycounter == 2) {
    notationeasycounter = 0;
  }
}

function checkAnswer(answerkey, answerselected, nextmethod) {
  var gameanswer = document.getElementById('gameanswer');

  if(answerkey == answerselected) {
    gameanswer.textContent = 'Well Done ';
    gameanswer.style.background = 'green';

    var nextq = document.createElement("a");
    nextq.href = nextmethod;
    nextq.textContent = String.fromCodePoint('9193');
    nextq.className += 'gamebutton';
    gameanswer.appendChild(nextq);
  } else {
    gameanswer.textContent = 'Try Again';
    gameanswer.style.background = 'red';
  }

}

function circleOfFifthsGame() {
  clearGameSpace();
  loadedGame = 'Circle';
  var gamemain = document.getElementById('gamemain');
  var gameanswers = document.getElementById('gameanswers');
  //var gameanswer = document.getElementById('gameanswer');

  //need a random 0-26     27
  var randomquestion = Math.floor(Math.random() * 27);

  var qtoggle = false;
  var circlekey = circle[randomquestion]['key'];
  if(circlekey.indexOf('_TOGGLE') != -1) {
    qtoggle = true;
    circlekey = circlekey.substring(0,circlekey.indexOf('_'));
  }

  var circlequestion = document.createElement("div");
  circlequestion.textContent = 'The key of ' + circlekey + ' has ?' ;
  var circleanswer = circle[randomquestion]['sign'];
  var answeroptions = [circle[randomquestion].sign, ...circle[randomquestion].twowrong.split(',')].sort();

  if(qtoggle) {
    var plural = ((circle[randomquestion]['sign'].indexOf('sharps') != -1) || (circle[randomquestion]['sign'].indexOf('flats') != -1));
    var singorplu = plural ? 'are they?' : 'is it?';
    circlequestion.textContent = 'The key of ' + circlekey + ' has ' +
       circle[randomquestion]['sign'] + '. What ' + singorplu;
    circleanswer = circle[randomquestion]['flatsharp'];
    answeroptions = [circle[randomquestion].flatsharp, ...circle[randomquestion].twowrong.split(',')].sort();
  }

  //{'key':'F', 'qtoggle':'true', 'sign': '1 flat', 'flatsharp': 'Bb', 'twowrong': 'Eb,Ab'}];


    gamemain.appendChild(circlequestion);





      for (var i=0; i<3; i++) {
        var cbutton = document.createElement("button");
        cbutton.className = 'answerbuttons';
        //cbutton.id = 'relatives
        cbutton.type = 'button';
        cbutton.textContent = answeroptions[i];
        var ansmethod = 'javascript:checkAnswer("' + circleanswer + '", "' + answeroptions[i] + '","javascript:circleOfFifthsGame()");';
        cbutton.setAttribute('onclick',ansmethod);
        gameanswers.appendChild(cbutton);
      }

  showHelp();


}

function showHelp() {
  var gamehelp = document.getElementById('gamehelp');
  gamehelp.classList.remove('gamehelphidden');
  gamehelp.className = 'gamebutton';
  //  gamehelp.setAttribute('onclick', function help(){
  //    if(this.textContent == '&#129300;') {
  //      this.textContent += 'If you are in a major key move down 3 semitones to find the relative minor. If you are in a minor key move up 3 semitones to find the relative major.';
  //    } else {
  //      this.textContent = '&#129300;';
  //    }
  //  });

  //gamehelp.style.display = '';
  //mag glass 128269
}

function help(){
    var helpdetail = document.getElementById('helpdetail');
//    if(document.getElementById('gamemain').innerHTML.indexOf('relative') != -1){
//        if(gamehelp.textContent.length < 3) {
//          gamehelp.textContent = 'If you are in a major key move down 3 semitones to find the relative minor. If you are in a minor key move up 3 semitones to find the relative major.';
//        }
//    }



        switch(loadedGame) {
          case 'Circle':
            if(helpdetail.innerText.length == 0) {
              if(document.getElementById('gamemain').innerHTML.indexOf('flat') != -1){
                helpdetail.textContent = " Order of Flats: B E A D G C F";
              } else if(document.getElementById('gamemain').innerHTML.indexOf('sharp') != -1){
                helpdetail.textContent = " Order of Sharps: F C G D A E B";
              } else if(document.getElementById('gamemain').innerHTML.indexOf('b has ?') != -1){
                helpdetail.textContent = ' The order in circle of fifths is C F Bb Eb Ab Db Gb Cb, try making up a mnemonic to remember';
              } else if(document.getElementById('gamemain').innerHTML.indexOf('F has ?') != -1){
                helpdetail.textContent = ' The order of flats in circle of fifths is C F Bb Eb Ab Db Gb Cb, try making up a mnemonic to remember';
              } else if(document.getElementById('gamemain').innerHTML.indexOf('C has ?') != -1){
                helpdetail.textContent = ' The key of C has no sharps or flats';
              } else if(document.getElementById('gamemain').innerHTML.indexOf('has ?') != -1){
                helpdetail.textContent = ' The order of sharps in circle of fifths is C G D A E B F# C#, try making up a mnemonic to remember';
              }
            } else {
              helpdetail.textContent = '';
            }
            break;
          case 'Relatives':
            if((helpdetail.innerText.length == 0) && (document.getElementById('gamemain').innerHTML.indexOf('Minor') != -1)) {
              helpdetail.textContent = ' If you are in a minor key move up 3 semitones to find the relative major.';
            } else if((helpdetail.innerText.length == 0) && (document.getElementById('gamemain').innerHTML.indexOf('Major') != -1)) {
              helpdetail.textContent = ' If you are in a major key move down 3 semitones to find the relative minor.';
            } else {
              helpdetail.textContent = '';
            }
            break;
          default:
              //gamehelp.href = 'javascript:help();';
              //gamehelp.innerText = String.fromCodePoint('129300');
        }
//        else {
//          gamehelp.innerText = '&#129300;';
//        }

}

function clearGameSpace() {
  document.getElementById('gameselection').style.display="none";
  var gamemain = document.getElementById('gamemain');
  gamemain.innerHTML = '';

  var gameanswers = document.getElementById('gameanswers');
  gameanswers.innerHTML = '';

  var gameanswer = document.getElementById('gameanswer');
  gameanswer.innerHTML = '';
  gameanswer.style.background = 'lightgoldenrodyellow';

  var helpdetail = document.getElementById('helpdetail');
  //gamehelp.href = 'javascript:help();';
  helpdetail.textContent = '';


}