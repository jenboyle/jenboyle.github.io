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

  const pkey = document.createElement("p");
  pkey.textContent = 'Key: ' + jsonData.key;
  div.appendChild(pkey);

  const ptune = document.createElement("p");
  ptune.textContent = 'Tuning: ' + jsonData.tuning;
  div.appendChild(ptune);



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

  }


  if(jsonData.hasOwnProperty('textb4intro')) {
    var sometext = document.createElement("div");
    sometext.textContent = jsonData.textb4intro;
    div.appendChild(sometext);
  }

  testfortab('e1', jsonData, div);

  if(jsonData.hasOwnProperty('textb4verse1')) {
    var sometext = document.createElement("div");
    sometext.textContent = jsonData.textb4verse1;
    div.appendChild(sometext);
  }

  testfortab('e5', jsonData, div);

  if(jsonData.hasOwnProperty('textb4verse2')) {
    sometext = document.createElement("div");
    sometext.textContent = jsonData.textb4verse2;
    div.appendChild(sometext);
  }

  testfortab('e9', jsonData, div);

    if(jsonData.hasOwnProperty('textb4verse3')) {
      sometext = document.createElement("div");
      sometext.textContent = jsonData.textb4verse3;
      div.appendChild(sometext);
    }

  testfortab('e13', jsonData, div);
  testfortab('e17', jsonData, div);


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
  checkChords(jsonData, div, 'chord1', 'chord1e', 'chord1a', 'chord1d', 'chord1g');
  checkChords(jsonData, div, 'chord2', 'chord2e', 'chord2a', 'chord2d', 'chord2g');

}
function checkChords(jsonData, div, chord, estr, astr, dstr, gstr) {
      if(jsonData.hasOwnProperty(chord)) {
          const chordboxdiv = document.createElement("div");
          chordboxdiv.style.height = '270px';
          chordboxdiv.style.width = '150px';
          chordboxdiv.style.backgroundColor = 'pink';
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

          if(jsonData.hasOwnProperty(estr)) {
            var img = document.createElement('img');
            img.style.position = 'relative';
            if(jsonData[estr] == "0") {
              img.src = "resources/images/icons/open.jpg";
              img.style.left = '-10px'; //e
              img.style.top = '10px'; //e0
            } else if(jsonData[estr] == "2") {
              img.src = "resources/images/icons/circle.jpg";
              img.style.left = '-10px'; //e
              img.style.top = '105px'; //e0
            }
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
              if(jsonData[astr] == "2") {
                img.src = "resources/images/icons/circle.jpg";
                img.style.left = '0px';
                img.style.top = '105px';
                chordboxdiv.appendChild(img);
              } else if(jsonData[astr] == "4") {
                img.src = "resources/images/icons/circle.jpg";
                img.style.left = '0px';
                img.style.top = '225px';
                chordboxdiv.appendChild(img);
              }
          }

          if(jsonData.hasOwnProperty(dstr)) {
              var img = document.createElement('img');
              img.style.position = 'relative';
              if(jsonData[dstr] == "2") {
                img.src = "resources/images/icons/circle.jpg";
                img.style.left = '12px';
                img.style.top = '105px';
                chordboxdiv.appendChild(img);
              } else if(jsonData[dstr] == "4") {
                img.src = "resources/images/icons/circle.jpg";
                img.style.left = '12px';
                img.style.top = '225px';
                chordboxdiv.appendChild(img);
              }
          }

          if(jsonData.hasOwnProperty(dstr)) {
              var img = document.createElement('img');
              img.style.position = 'relative';
              if(jsonData[gstr] == "1") {
                img.src = "resources/images/icons/circle.jpg";
                img.style.left = '22px';
                img.style.top = '50px';
                chordboxdiv.appendChild(img);
              } else if(jsonData[gstr] == "2") {
                img.src = "resources/images/icons/circle.jpg";
                img.style.left = '22px';
                img.style.top = '105px';
                chordboxdiv.appendChild(img);
              }
          }



div.appendChild(chordboxdiv);

//  "chord2": "F#m",
//  "chord2e": "2",
//  "chord2a": "4",
//  "chord2d": "4",
//  "chord2g": "2",
//  "chord3": "G#m",
//  "chord3out":"4",
//  "chord3e": "1",
//  "chord3a": "3",
//  "chord3d": "3",
//  "chord3g": "1"


      }
}