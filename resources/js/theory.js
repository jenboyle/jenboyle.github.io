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
  testfortab('e13', jsonData, div);
  testfortab('e17', jsonData, div);

}

function testfortab(jsonfield, jsonData, div) {

  if(jsonData.hasOwnProperty(jsonfield)) {

    var table = document.createElement("table");
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

    drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData[gkey], jsonData[dkey], jsonData[akey], jsonData[ekey]);
    
    if(jsonData.hasOwnProperty(ekey2)){
      drawRowsAndCols (true, true, trg, trd, tra, tre, jsonData[gkey2], jsonData[dkey2], jsonData[akey2], jsonData[ekey2]);
    }

    
    if(jsonData.hasOwnProperty(ekey3)){
      drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData[gkey3], jsonData[dkey3], jsonData[akey3], jsonData[ekey3]);
    }

    if(jsonData.hasOwnProperty(ekey4)){
      drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData[gkey4], jsonData[dkey4], jsonData[akey4], jsonData[ekey4]);
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