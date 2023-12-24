var nextSelectionArr = [{'id':'eartraining','games':[{'gameid1':'dronetest', 'gametext1':'Drone Test'}]},
                        {'id':'musictheory','games':[{'gameid1':'relatives', 'gametext1':'Relatives Test', 'gamemethod1':'relativesGame();'},
                          {'gameid2':'circleoffifths', 'gametext2':'Circle of Fifths', 'gamemethod2':'circleOfFifthsGame();'}]}];

var relatives = [{'key':'Ab Major', 'rel': 'F Minor'}, {'key':'A Major', 'rel':'F# Minor'}, {'key':'Bb Major', 'rel': 'G Minor'}, {'key':'B Major', 'rel':'G# Minor'},
                 {'key':'C Major', 'rel': 'A Minor'}, {'key':'Db Major', 'rel': 'Bb Minor'}, {'key':'D Major', 'rel':'B Minor'}, {'key':'Eb Major', 'rel':'C Minor'},
                 {'key':'E Major', 'rel': 'C# Minor'}, {'key':'F Major', 'rel': 'D Minor'}, {'key':'Gb Major', 'rel': 'Eb Minor'}, {'key':'G Major', 'rel': 'E Minor'},
                 {'key':'F Minor', 'rel': 'Ab Major'}, {'key':'F# Minor', 'rel':'A Major'}, {'key':'G Minor', 'rel': 'Bb Major'}, {'key':'G# Minor', 'rel':'B Major'},
                 {'key':'A Minor', 'rel': 'C Major'}, {'key':'Bb Minor', 'rel': 'Db Major'}, {'key':'B Minor', 'rel':'D Major'}, {'key':'C Minor', 'rel':'Eb Major'},
                 {'key':'C# Minor', 'rel': 'E Major'}, {'key':'D Minor', 'rel': 'F Major'}, {'key':'Eb Minor', 'rel': 'Gb Major'}, {'key':'E Minor', 'rel': 'G Major'}];

var circle = [{'key':'C', 'sign': 'no sharps or flats', 'twowrong': '1 sharp,1 flat'}, {'key':'F', 'sign': '1 flat', 'twowrong': '1 sharp,3 flats'}];

var previousRelative = '';
var loadedGame = '';



// or do you want to know the answer, answers right out of

function showNextGameSelection(game) {

  //hide first set buttons
  document.getElementById('eartraining').style.display = "none";
  document.getElementById('musictheory').style.display = "none";

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

  //need a random 0-23
  var randomscale = Math.floor(Math.random() * 24);

  //ensure it is different from last question
  while(randomscale == previousRelative) {
    randomscale = Math.floor(Math.random() * 24);
  }

  previousRelative = randomscale;

  var relativequestion = document.createElement("div");
  relativequestion.textContent = 'What is the relative key of ' + relatives[randomscale]['key'] + '?' ;

  gamemain.appendChild(relativequestion);

  var relativeanswer = relatives[randomscale]['rel'];



  for (var i=0; i<24; i++) {
    var qbutton = document.createElement("button");
    qbutton.className = 'answerbuttons';
    //qbutton.id = 'relatives
    qbutton.type = 'button';
    qbutton.textContent = relatives[i].key;
    var ansmethod = 'javascript:checkAnswer("' + relativeanswer + '", "' + relatives[i].key + '","javascript:relativesGame()");';
    qbutton.setAttribute('onclick',ansmethod);
    gameanswers.appendChild(qbutton);
  }

  showHelp();
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

  //need a random 0-1
  var randomquestion = Math.floor(Math.random() * 2);

  var circlequestion = document.createElement("div");
    circlequestion.textContent = 'The key of ' + circle[randomquestion]['key'] + ' has?' ;

    gamemain.appendChild(circlequestion);

    var circleanswer = circle[randomquestion]['sign'];

    var answeroptions = [circle[randomquestion].sign, ...circle[randomquestion].twowrong.split(',')].sort();

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
              if(document.getElementById('gamemain').innerHTML.indexOf('key of C') != -1){
                helpdetail.textContent = 'Cosy Cat has no sharps or flats';
              } else if(document.getElementById('gamemain').innerHTML.indexOf('key of F') != -1){
                helpdetail.textContent = "Cosy Cat's knife cuts the fillet of fish";
              }
            } else {
              helpdetail.textContent = '';
            }
            break;
          case 'Relatives':
            if((helpdetail.innerText.length == 0) && (document.getElementById('gamemain').innerHTML.indexOf('Minor') != -1)) {
              helpdetail.textContent = 'If you are in a minor key move up 3 semitones to find the relative major.';
            } else if((helpdetail.innerText.length == 0) && (document.getElementById('gamemain').innerHTML.indexOf('Major') != -1)) {
              helpdetail.textContent = 'If you are in a major key move down 3 semitones to find the relative minor.';
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