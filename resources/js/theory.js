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
  const div = document.getElementById(element);
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