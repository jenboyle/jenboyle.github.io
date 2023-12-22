var nextSelectionArr = [{'id':'eartraining','games':[{'gameid1':'dronetest', 'gametext1':'Drone Test'}]},
                        {'id':'musictheory','games':[{'gameid1':'relativeminor', 'gametext1':'Relative Minor'},
                          {'gameid2':'relativemajor', 'gametext2':'Relative Major'}]}];

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
          button.id = nextSelectionArr[i].games[j][idtext];//'relativeminor';
          button.type = 'button';
          button.textContent = nextSelectionArr[i].games[j][text];//'Relative Minor';
          //onclick

          gamediv.appendChild(button);
        }
      }
  }



}