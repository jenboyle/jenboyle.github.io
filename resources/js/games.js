var nextSelectionArr = [{'id':'eartraining','games':[{'gameid1':'dronetest', 'gametext1':'Drone Test'}]},
                        {'id':'musictheory','games':[{'gameid1':'relatives', 'gametext1':'Relatives Test', 'gamemethod1':'relativesGame();'},
                          {'gameid2':'relativemajor', 'gametext2':'Relative Major'}]}];

var relatives = [{'key':'Ab Major', 'rel': 'F Minor'}, {'key':'A Major', 'rel':'F# Minor'}, {'key':'Bb Major', 'rel': 'G Minor'}, {'key':'B Major', 'rel':'G# Minor'},
                 {'key':'C Major', 'rel': 'A Minor'}, {'key':'Db Major', 'rel': 'Bb Minor'}, {'key':'D Major', 'rel':'B Minor'}, {'key':'Eb Major', 'rel':'C Minor'},
                 {'key':'E Major', 'rel': 'C# Minor'}, {'key':'F Major', 'rel': 'D Minor'}, {'key':'Gb Major', 'rel': 'Eb Minor'}, {'key':'G Major', 'rel': 'E Minor'},
                 {'key':'F Minor', 'rel': 'Ab Major'}, {'key':'F# Minor', 'rel':'A Major'}, {'key':'G Minor', 'rel': 'Bb Major'}, {'key':'G# Minor', 'rel':'B Major'},
                 {'key':'A Minor', 'rel': 'C Major'}, {'key':'Bb Minor', 'rel': 'Db Major'}, {'key':'B Minor', 'rel':'D Major'}, {'key':'C Minor', 'rel':'Eb Major'},
                 {'key':'C# Minor', 'rel': 'E Major'}, {'key':'D Minor', 'rel': 'F Major'}, {'key':'Eb Minor', 'rel': 'Gb Major'}, {'key':'E Minor', 'rel': 'G Major'}];

                 //right or wrong, guess again hint or do you want to know the answer, Next, answers right out of

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
  document.getElementById('gameselection').style.display="none";

  var gamemain = document.getElementById('gamemain');

  //need a random 0-23
  var randomscale = Math.floor(Math.random() * 24);

  var relativequestion = document.createElement("div");
  relativequestion.textContent = 'What is the relative key of ' + relatives[randomscale]['key'] + '?' ;

  gamemain.appendChild(relativequestion);

  var relativeanswer = relatives[randomscale]['rel'];


  var gameanswers = document.getElementById('gameanswers');
  for (var i=0; i<24; i++) {
    var qbutton = document.createElement("button");
    qbutton.className = 'gamebuttons';
    //qbutton.id = 'relatives
    qbutton.type = 'button';
    qbutton.textContent = relatives[i].key;
    var ansmethod = 'javascript:relativesGameCheckAnswer("' + relativeanswer + '", "' + relatives[i].key + '");';
    qbutton.setAttribute('onclick',ansmethod);
    gameanswers.appendChild(qbutton);
  }


  //console.log(relativeanswer);


}

function relativesGameCheckAnswer(answerkey, answerselected) {
  var gameanswer = document.getElementById('gameanswer');

  if(answerkey == answerselected) {
    gameanswer.textContent = 'Well Done';
  } else {
    gameanswer.textContent = 'Try Again';
  }

}