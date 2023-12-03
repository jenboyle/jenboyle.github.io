var pentatonicselected = 'cmajorpent1';
var pentatonicselectedlocs = 'E8,E10,A7,A10,D7,D10';
var div;

function loadTheory(topic, element, ul) {
  console.log(topic);
  //hide the ul
  //document.getElementById(ul).style.display = "none";

  fetch('https://groovyjen.com/resources/json/theory/' + topic + '.json')
    .then((response) => response.json())
    .then((json) => drawTheory(json, element));
}

function drawTheory(jsonData, element) {
  console.log(jsonData);
  div = document.getElementById(element);
  div.innerHTML = '';
  const psong = document.createElement("p");
  psong.textContent = jsonData.song;
  div.appendChild(psong);

  if(jsonData.hasOwnProperty('key')) {
    const pkey = document.createElement("p");
    pkey.textContent = 'Key: ' + jsonData.key;
    div.appendChild(pkey);
  } else if(jsonData.hasOwnProperty('tablefifths')){
    drawTableFifths(jsonData, div);
  } else if (jsonData.hasOwnProperty('fretboard')) {
    drawFretboard(jsonData, div);
  }

//  const ptune = document.createElement("p");
//  ptune.textContent = 'Tuning: ' + jsonData.tuning;
//  div.appendChild(ptune);



  if(jsonData.hasOwnProperty('chords')) {

    const chords_table = document.createElement("table");

    const chords_caption = document.createElement("caption");
    chords_caption.textContent = "Chords";
    chords_table.appendChild(chords_caption);

    chords_table.className = 'chord';
    const chords_trh = document.createElement("tr");


    var chords = jsonData.chords;
    const chordArr = chords.split(',');

    for(i=0; i<chordArr.length; i++){
        const chords_th = document.createElement("th");
        chords_th.textContent = (i+1);
        chords_trh.appendChild(chords_th);
    }

    chords_table.appendChild(chords_trh);

    const chords_tr = document.createElement("tr");



    for(i=0; i<chordArr.length; i++){
        const chords_td = document.createElement("td");
        chords_td.textContent = chordArr[i];
        chords_tr.appendChild(chords_td);
    }

    chords_table.appendChild(chords_tr);

    if(jsonData.hasOwnProperty('chordtones')) {
      const chordtones_tr = document.createElement("tr");
      var chordtones = jsonData.chordtones;
      const chordToneArr = chordtones.split(',');

      for(i=0; i<chordArr.length; i++){
        const chordtones_td = document.createElement("td");
        chordtones_td.textContent = chordToneArr[i];
        chordtones_tr.appendChild(chordtones_td);
      }

      chords_table.appendChild(chordtones_tr);

    }

    div.appendChild(chords_table);

    if(jsonData.hasOwnProperty('notes')) {
      const notes = document.createElement("p");
      notes.textContent = 'Notes: ' + jsonData.notes;

      const relativelink = document.createElement("a");
        //relativelink.href = "javascript:loadTheory('cmajor', 'theorydiv', 'theoryList');"
        relativelink.href = "javascript:loadTheory('" + jsonData.relativelink + "', 'theorydiv', 'theoryList');"
        //"relativelink": "bmajor",
        //  "relativelinktext": "B",
        relativelink.textContent = jsonData.relativelinktext;
        //<a href="javascript:loadTheory('cmajor', 'theorydiv', 'theoryList');">C Major</a>
      notes.appendChild(relativelink);


      div.appendChild(notes);
      }

  }


  var tabNumber = 1;
  for(i=1; i<12; i++){
    var prop = 'textb4tab' + i;
    if(jsonData.hasOwnProperty(prop)) {
      var sometext = document.createElement("div");
      sometext.textContent = jsonData[prop];
      div.appendChild(sometext);
    }
    var tab = 'e' + tabNumber;
    testfortab(tab, jsonData, div);
    tabNumber += 4;

  }


      //Draw chord box
      checkForChords(jsonData, div);



}

function testfortab(jsonfield, jsonData, div) {

  if(jsonData.hasOwnProperty(jsonfield)) {

    var table = document.createElement("table");
    table.className = 'tab';
    var trg = document.createElement("tr");
    var trd = document.createElement("tr");
    var tra = document.createElement("tr");
    var tre = document.createElement("tr");

    var enumber = jsonfield.substring(1,jsonfield.length);
    var gkey = 'g' + enumber;
    var dkey = 'd' + enumber;
    var akey = 'a' + enumber;
    var ekey = 'e' + enumber;

    var gkey2 = 'g' + (Number(enumber) + 1);
    var dkey2 = 'd' + (Number(enumber) + 1);
    var akey2 = 'a' + (Number(enumber) + 1);
    var ekey2 = 'e' + (Number(enumber) + 1);

    var gkey3 = 'g' + (Number(enumber) + 2);
    var dkey3 = 'd' + (Number(enumber) + 2);
    var akey3 = 'a' + (Number(enumber) + 2);
    var ekey3 = 'e' + (Number(enumber) + 2);

    var gkey4 = 'g' + (Number(enumber) + 3);
    var dkey4 = 'd' + (Number(enumber) + 3);
    var akey4 = 'a' + (Number(enumber) + 3);
    var ekey4 = 'e' + (Number(enumber) + 3);

    drawRowsAndCols (true, true, trg, trd, tra, tre, jsonData[gkey], jsonData[dkey], jsonData[akey], jsonData[ekey]);
    
    if(jsonData.hasOwnProperty(ekey2)){
      drawRowsAndCols (false, true, trg, trd, tra, tre, jsonData[gkey2], jsonData[dkey2], jsonData[akey2], jsonData[ekey2]);
    }

    
    if(jsonData.hasOwnProperty(ekey3)){
      drawRowsAndCols (false, true, trg, trd, tra, tre, jsonData[gkey3], jsonData[dkey3], jsonData[akey3], jsonData[ekey3]);
    }

    if(jsonData.hasOwnProperty(ekey4)){
      drawRowsAndCols (false, true, trg, trd, tra, tre, jsonData[gkey4], jsonData[dkey4], jsonData[akey4], jsonData[ekey4]);
    }

    table.appendChild(trg);
    table.appendChild(trd);
    table.appendChild(tra);
    table.appendChild(tre);
    div.appendChild(table);

  }

}

function drawRowsAndCols (start, end, trg, trd, tra, tre, gnotes, dnotes, anotes, enotes) {
    var startline = '';
    var endline = '';

    if(start) {
      startline = '|';
    }
    if(end) {
      endline = '|';
    }

    var tdg = document.createElement("td");
    tdg.textContent = startline + gnotes + endline;
    trg.appendChild(tdg);
    
    var tdd = document.createElement("td");
    tdd.textContent = startline + dnotes + endline;
    trd.appendChild(tdd);
  
    var tda = document.createElement("td");
    tda.textContent = startline + anotes + endline;
    tra.appendChild(tda);
  
    var tde = document.createElement("td");
    tde.textContent = startline + enotes + endline;
    tre.appendChild(tde);

}

function showTheory(ul) {
  ul = document.getElementById(ul);

    //show the ul
    if(ul.style.display == "none"){
      ul.style.display = "";
    }

}


function checkForChords(jsonData, div) {
  checkChords(jsonData, div, 'chord1', 'chord1e', 'chord1a', 'chord1d', 'chord1g', false, false);
  checkChords(jsonData, div, 'chord2', 'chord2e', 'chord2a', 'chord2d', 'chord2g', false, false);
  checkChords(jsonData, div, 'chord3', 'chord3e', 'chord3a', 'chord3d', 'chord3g', true, false);

  checkChords(jsonData, div, 'chord4', 'chord4e', 'chord4a', 'chord4d', 'chord4g', false, true);
  checkChords(jsonData, div, 'chord5', 'chord5e', 'chord5a', 'chord5d', 'chord5g', false, false);
  checkChords(jsonData, div, 'chord6', 'chord6e', 'chord6a', 'chord6d', 'chord6g', true, false);

  checkChords(jsonData, div, 'chord7', 'chord7e', 'chord7a', 'chord7d', 'chord7g', false, true);
  checkChords(jsonData, div, 'chord8', 'chord8e', 'chord8a', 'chord8d', 'chord8g', false, false);


}
function checkChords(jsonData, div, chord, estr, astr, dstr, gstr, numOut, newblock) {
      if(jsonData.hasOwnProperty(chord)) {
          const chordboxdiv = document.createElement("div");
          chordboxdiv.style.height = '300px';
          chordboxdiv.style.width = '150px';
          //chordboxdiv.style.backgroundColor = 'pink';
          if(newblock) {
            // div for next block
            div.appendChild(document.createElement("div"));
          }
          chordboxdiv.style.display = 'inline-block';

          const chord1_table = document.createElement("table");
          chord1_table.className = 'chordbox';
          chord1_table.id = chord;

          const chord1_caption = document.createElement("caption");
          chord1_caption.textContent = jsonData[chord];
          chord1_table.appendChild(chord1_caption);

          var chords1_tr1 = document.createElement("tr");
          chords1_tr1.appendChild(document.createElement("td"));
          chords1_tr1.appendChild(document.createElement("td"));
          chords1_tr1.appendChild(document.createElement("td"));
          chord1_table.appendChild(chords1_tr1);

          var chords1_tr2 = document.createElement("tr");
          chords1_tr2.appendChild(document.createElement("td"));
          chords1_tr2.appendChild(document.createElement("td"));
          chords1_tr2.appendChild(document.createElement("td"));
          chord1_table.appendChild(chords1_tr2);

          var chords1_tr3 = document.createElement("tr");
          chords1_tr3.appendChild(document.createElement("td"));
          chords1_tr3.appendChild(document.createElement("td"));
          chords1_tr3.appendChild(document.createElement("td"));
          chord1_table.appendChild(chords1_tr3);

          var chords1_tr4 = document.createElement("tr");
          chords1_tr4.appendChild(document.createElement("td"));
          chords1_tr4.appendChild(document.createElement("td"));
          chords1_tr4.appendChild(document.createElement("td"));
          chord1_table.appendChild(chords1_tr4);

          chordboxdiv.appendChild(chord1_table);


//          var rect = chord1_table.getBoundingClientRect();
//          var ypos = window.scrollY + document.querySelector('#chord1').getBoundingClientRect().top;
//          var xpos = window.scrollX + document.querySelector('#chord1').getBoundingClientRect().left;
//
//console.log(rect.left + ', ' + rect.top + ', ' + rect.right + ', ' + rect.bottom);


          var leftestr = '-10px';
          var leftastr = '0px';
          var leftdstr = '12px';
          var leftgstr = '22px';




          var numberFret = chord + 'out';
          if(jsonData.hasOwnProperty(numberFret)) {
             var img = document.createElement('img');
             img.style.position = 'relative';
             img.src = "resources/images/icons/" + jsonData[numberFret] + ".png";

             //img.src = "resources/images/icons/open.jpg";
             img.style.left = '-30px'; //e
             img.style.top = '50px'; //e0

             chordboxdiv.appendChild(img);

             leftestr = '-30px';
             leftastr = '-20px';
             leftdstr = '-8px';
             leftgstr = '2px';

          }

          if(jsonData.hasOwnProperty(estr)) {
            var img = document.createElement('img');
            img.style.position = 'relative';
            img.style.left = leftestr; //e
            styleImgOnString(jsonData[estr], img);
            //  margin-left: 400px;
            //    margin-top: 10px;
            //img.className = 'chordboximgd0';
            //img.style.left = (rect.left-6) + 'px'; //e0
            //img.style.top = rect.top;
            //img.style.left = (xpos + 200);
            //img.style.right = ypos + 300;
            chordboxdiv.appendChild(img);

          }

          if(jsonData.hasOwnProperty(astr)) {
              var img = document.createElement('img');
              img.style.position = 'relative';
              img.style.left = leftastr;
              styleImgOnString(jsonData[astr], img);
              chordboxdiv.appendChild(img);
          }

          if(jsonData.hasOwnProperty(dstr)) {
              var img = document.createElement('img');
              img.style.position = 'relative';
              img.style.left = leftdstr;
              styleImgOnString(jsonData[dstr], img);
              chordboxdiv.appendChild(img);
          }

          if(jsonData.hasOwnProperty(gstr)) {
              var img = document.createElement('img');
              img.style.position = 'relative';
              img.style.left = leftgstr;
              styleImgOnString(jsonData[gstr], img);
              chordboxdiv.appendChild(img);
          }



div.appendChild(chordboxdiv);




      }
}

function styleImgOnString(str, img) {
  var fret0 = '10px';
  var fret1 = '50px';
  var fret2 = '105px';
  var fret3 = '165px';
  var fret4 = '225px';

  if(str == "x") {
    img.src = "resources/images/icons/mute.png";
    img.style.top = fret0;
  } else if(str == "0") {
    img.src = "resources/images/icons/open.png";
    img.style.top = fret0;
  } else if(str == "1") {
    img.src = "resources/images/icons/circle.png";
    img.style.top = fret1;
  } else if(str == "2") {
    img.src = "resources/images/icons/circle.png";
    img.style.top = fret2;
  } else if(str == "3") {
    img.src = "resources/images/icons/circle.png";
    img.style.top = fret3;
  } else if(str == "4") {
    img.src = "resources/images/icons/circle.png";
    img.style.top = fret4;
  }

}

function drawTableFifths(jsonData, div) {

  const circleimg = document.createElement("img");
  circleimg.src = 'resources/images/theory/circlefifths.jpg';
  div.appendChild(circleimg);

  const tabletitle = document.createElement("p");
  tabletitle.textContent = 'Table of Fifths';
  div.appendChild(tabletitle);
  drawTable(jsonData, div, 'sharps');
  drawTable(jsonData, div, 'flats');

  if(jsonData.hasOwnProperty('orderofsharps')) {
    const sharpsdiv = document.createElement("div");
    sharpsdiv.textContent = 'Order of Sharps: ' + jsonData.orderofsharps;
    div.appendChild(sharpsdiv);
  }

  if(jsonData.hasOwnProperty('orderofflats')) {
    const flatsdiv = document.createElement("div");
    flatsdiv.textContent = 'Order of Flats: ' + jsonData.orderofflats;
    div.appendChild(flatsdiv);
  }

}

function drawTable(jsonData, div, key) {

  checkkey = key + 'title';
  if(jsonData.hasOwnProperty(checkkey)) {

    const table = document.createElement("table");

    const caption = document.createElement("caption");
    caption.textContent = jsonData[checkkey];
    table.appendChild(caption);

    table.className = 'fifthstable';
    const trh = document.createElement("tr");
    const note_th = document.createElement("th");
    note_th.textContent = 'Key';
    trh.appendChild(note_th);

    const amountth = document.createElement("th");
    var capkey = key.charAt(0).toUpperCase() + key.slice(1);
    amountth.textContent = 'Amount of ' + capkey;
    trh.appendChild(amountth);

    const whatth = document.createElement("th");
    whatth.textContent = capkey;
    trh.appendChild(whatth);

    table.appendChild(trh);


    for(i=1; i<9; i++){
      const fifths_tr = document.createElement("tr");

      const fifthskey_td = document.createElement("td");
      var fifthskey = i + key + 'key';
      fifthskey_td.textContent = jsonData[fifthskey];
      fifthskey_td.className = 'fifthstablecenttd';
      fifths_tr.appendChild(fifthskey_td);

      const fifthsmany_td = document.createElement("td");
      var manykey = i + key + 'many';
      fifthsmany_td.textContent = jsonData[manykey];
      fifthsmany_td.className = 'fifthstablecenttd';
      fifths_tr.appendChild(fifthsmany_td);

      const fifthswhat_td = document.createElement("td");
      var whatkey = i + key + 'what';
      fifthswhat_td.textContent = jsonData[whatkey];
      fifthswhat_td.className = 'fifthstablelefttd';
      fifths_tr.appendChild(fifthswhat_td);

      table.appendChild(fifths_tr);
    }
    div.appendChild(table);
  }
}

function loadPent() {
  //if(jsonData.hasOwnProperty(chosenPent)) {
          //var pentjson = jsonData[chosenPent];
          //const pentArr = pentjson.split(',');




          //alert(pentatonicselected);
          //alert(pentatonicselectedlocs);

          const pentArr = pentatonicselectedlocs.split(',');


          for(i=0; i<pentArr.length; i++){
            if(document.getElementById("penticon" + i) != undefined) {
            div.removeChild(document.getElementById("penticon" + i));
            }
          }



          var adjust = 25;

          for(i=0; i<pentArr.length; i++){

            const note1img = document.createElement("img");
            note1img.src = 'resources/images/icons/diamond3.png';
            if(i==0 || i==(pentArr.length-1)) {
              note1img.src = 'resources/images/icons/diamond1.png';
            }
            note1img.style.position = 'relative';
            //note1img.style.left = '0px';
            //note1img.style.top = '0px';


            var coord = pentArr[i];
            var stringloc = coord.charAt(0);
            var fretloc = coord.substring(1,coord.length);

            if(stringloc == 'E') {
              note1img.style.top = '72px';
            } else if (stringloc == 'A') {
              note1img.style.top = '47px';
            } else if (stringloc == 'D') {
              note1img.style.top = '22px';
            } else if (stringloc == 'G') {
              note1img.style.top = '-3px';
            }



            if(fretloc == '0'){
              note1img.style.left = (10-adjust) + 'px';
            } else if(fretloc == '1'){
              note1img.style.left = (68-adjust) + 'px';
            } else if(fretloc == '2'){
              note1img.style.left = (140-adjust) + 'px';
            } else if(fretloc == '3'){
              note1img.style.left = (215-adjust) + 'px';
            } else if(fretloc == '4'){
              note1img.style.left = (280-adjust) + 'px';
            } else if(fretloc == '5'){
              note1img.style.left = (335-adjust) + 'px';
            } else if(fretloc == '6'){
              note1img.style.left = (385-adjust) + 'px';
            } else if(fretloc == '7'){
              note1img.style.left = (428-adjust) + 'px';
            } else if(fretloc == '8'){
              note1img.style.left = (471-adjust) + 'px';
            } else if(fretloc == '9'){
              note1img.style.left = (510-adjust) + 'px';
            } else if(fretloc == '10'){
              note1img.style.left = (541-adjust) + 'px';
            } else if(fretloc == '11'){
              note1img.style.left = (573-adjust) + 'px';
            } else if(fretloc == '12'){
              note1img.style.left = (600-adjust) + 'px';
            }

            //"cmajorpent2": "E8,E10,A7,A10,D7,D10",

            note1img.id = "penticon" + i;

            div.appendChild(note1img);
            adjust += 25;
          }

  //}
}

function drawFretboard(jsonData, div) {

  const when = document.createElement("p");
    when.textContent = jsonData.when;
    div.appendChild(when);

  //initial
  var buttonInitialText = 'C Major Pentatonic 1';
  if(jsonData.song.indexOf('Major') != -1){
    pentatonicselected = 'cmajorpent1';
    pentatonicselectedlocs = 'E8,E10,A7,A10,D7,D10';
  } else if(jsonData.song.indexOf('Minor') != -1){
    pentatonicselected = 'cminorpent1';
    pentatonicselectedlocs = 'A3,A6,D3,D5,G3,G5';
    buttonInitialText = 'C Minor Pentatonic 1';
  }

  //selection
  const pentdiv = document.createElement("div");
  pentdiv.className = 'dropdowntheory';

  const pentbutton = document.createElement("button");
  pentbutton.id = 'pentbutton';
  pentbutton.setAttribute('onclick','javascript:pentButtonClick();');
  pentbutton.className = 'dropbtntheory';
  pentbutton.textContent = buttonInitialText;

  pentdiv.appendChild(pentbutton);

  const pentdropdiv = document.createElement("div");
  pentdropdiv.id = "myDropdowntheory";
  pentdropdiv.className = 'dropdown-contenttheory';

  const pentinput = document.createElement("input");
  pentinput.id = "myInputtheory";
  pentinput.type = "text";
  pentinput.placeholder = "Search...";
  pentinput.setAttribute('onkeyup', 'javascript:filterFunction();');

  pentdropdiv.appendChild(pentinput);

  if(jsonData.hasOwnProperty('fret_choices')) {
      for(i=0; i<jsonData.fret_choices; i++) {
        var pent_name = 'pent_name'+(i+1);
        var pent_id = 'pent_id'+(i+1);
        var pent_locs = 'pent_locs'+(i+1);

        if(jsonData.hasOwnProperty(pent_name)) {
          var alinkpent = document.createElement("a");
          alinkpent.href = "javascript:void(0);";
            alinkpent.id = jsonData[pent_id];
            alinkpent.value = jsonData[pent_locs];
            alinkpent.textContent = jsonData[pent_name];

            alinkpent.onclick = function() {
              pentatonicselected = this.id;//jsonData[pent_id];
              pentatonicselectedlocs = this.value;//jsonData[pent_locs];
              document.getElementById('pentbutton').textContent = this.textContent;
              pentButtonClick();
              loadPent();
              //alert('var is:' + cmajorpent1);
              //alinkpent.textContent = this.textContent;

            };


            pentdropdiv.appendChild(alinkpent);



        }
      }
  }




//  const alinkcpent = document.createElement("a");
//  //alinkcpent.href = "loadPent(" + jsonData + ", 'cmajorpent1', " + div + ")";
//  alinkcpent.href = "javascript:void(0);";
//  alinkcpent.id = 'cmajorpent1';
//  alinkcpent.value = 'A3,D0,D2,G0,G2,G5';
//  alinkcpent.onclick = function() {
//    pentatonicselected = 'cmajorpent1';
//    pentatonicselectedlocs = "A3,D0,D2,G0,G2,G5";
//    document.getElementById('pentbutton').textContent = 'C Major Pentatonic 1';
//    pentButtonClick();
//    loadPent();
//    //alert('var is:' + cmajorpent1);
//  };
//  //loadPent(" + jsonData + ", 'cmajorpent1', " + div + ")");
//  //"javascript:hi(" + jsonData + ");";
//  alinkcpent.textContent = 'C Pentatonic 1';
//  pentdropdiv.appendChild(alinkcpent);
//
//    const alinkcpent2 = document.createElement("a");
//    //alinkcpent2.href = "loadPent(" + jsonData + ", 'cmajorpent2', " + div + ")";
//    alinkcpent2.href = "javascript:void(0);";
//    alinkcpent2.id = 'cmajorpent2';
//    alinkcpent2.value = 'E8,E10,A7,A10,D7,D10';
//    alinkcpent2.onclick = function() {
//      pentatonicselected = 'cmajorpent2';
//      pentatonicselectedlocs = "E8,E10,A7,A10,D7,D10";
//      document.getElementById('pentbutton').textContent = 'C Major Pentatonic 2';
//      pentButtonClick();
//      loadPent();
//      //alert('var is:' + cmajorpent2);
//    };
//
//    //loadPent(" + jsonData + ", 'cmajorpent2', " + div + ")");
//    //"javascript:hi(" + jsonData + ");";
//    alinkcpent2.textContent = 'C Pentatonic 2';
//    pentdropdiv.appendChild(alinkcpent2);

  pentdiv.appendChild(pentdropdiv);

  div.appendChild(pentdiv);

  const fretimg = document.createElement("img");
  fretimg.src = 'resources/images/theory/fretboard.png';

  fretimg.className = 'fretboard';
  div.appendChild(fretimg);

  //initial
    loadPent();


  //  cursor: url('resources/images/icons/basspointer.png');

}

function pentButtonClick() {
  document.getElementById('myDropdowntheory').classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInputtheory');
  filter = input.value.toUpperCase();
  dddiv = document.getElementById('myDropdowntheory');
  a = dddiv.getElementsByTagName("a");
  for (i=0; i< a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

