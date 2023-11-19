function goChoice(element, ul) {
  var input, filter, ul, li, a, i, txtValue;

  input = document.getElementById(element);

  filter = input.value.toUpperCase();
  ul = document.getElementById(ul);
  li = ul.getElementsByTagName('li');

  //show the ul
  if(ul.style.display == "none"){
    ul.style.display = "";
  }

  for (i=0; i < li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;

    if(txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

}

function loadTab(songname, articleelement, ul, animation) {
  console.log(songname);
  //hide the ul
  document.getElementById(ul).style.display = "none";

  fetch('https://groovyjen.com/resources/json/' + songname + '.json')
    .then((response) => response.json())
    .then((json) => drawTab(json, articleelement));

//  if(animation != 'no'){
//    animate(animation);
//  }

}

function drawTab(jsonData, articleelement) {
  console.log(jsonData);
  const article = document.getElementById(articleelement);
  article.innerHTML = '';
  const psong = document.createElement("p");
  psong.textContent = jsonData.song + ' - ' + jsonData.by;
  article.appendChild(psong);

  const pkey = document.createElement("p");
  pkey.textContent = 'Key: ' + jsonData.key;
  article.appendChild(pkey);

  const ptune = document.createElement("p");
  ptune.textContent = 'Tuning: ' + jsonData.tuning;
  article.appendChild(ptune);


  if(jsonData.hasOwnProperty('textb4tab1')) {
    var sometext = document.createElement("div");
    sometext.textContent = jsonData.textb4tab1;
    article.appendChild(sometext);
  }

  testfortab('e1', jsonData, article);

  if(jsonData.hasOwnProperty('textb4tab2')) {
    var sometext = document.createElement("div");
    sometext.textContent = jsonData.textb4tab2;
    article.appendChild(sometext);
  }

  testfortab('e5', jsonData, article);

  if(jsonData.hasOwnProperty('textb4tab3')) {
    sometext = document.createElement("div");
    sometext.textContent = jsonData.textb4tab3;
    article.appendChild(sometext);
  }

  testfortab('e9', jsonData, article);
  testfortab('e13', jsonData, article);
  testfortab('e17', jsonData, article);

}

function testfortab(jsonfield, jsonData, article) {

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
    article.appendChild(table);

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

var id = null;
function animate(animation) {
  
  var elem = document.getElementById('animation'+animation);
  //if(elem.style.display == "none"){
  //  elem.style.display = "";
  //}
  var posx = 0;
  var posy = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if ((posx == 400) && (posy == 300)) {
      clearInterval(id);
    } else if (posy == 300) {
      posx++;
      elem.style.left = posx + 'px';
    } else {
      posx++;
      posy++;
      elem.style.bottom = posy + 'px';
      elem.style.left = posx + 'px';
    }
  }
}

function showSongs(ul) {
  ul = document.getElementById(ul);

    //show the ul
    if(ul.style.display == "none"){
      ul.style.display = "";
    }

}