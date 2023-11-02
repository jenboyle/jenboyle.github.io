function goTranscriptionChoice() {
  var input, filter, ul, li, a, i, txtValue;

  input = document.getElementById('transcriptionchoice');

  filter = input.value.toUpperCase();
  ul = document.getElementById('songList');
  li = ul.getElementsByTagName('li');

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

function loadTab(songname) {
  console.log(songname);
  fetch('https://groovyjen.com/resources/json/' + songname + '.json')
    .then((response) => response.json())
    .then((json) => drawTab(json));
}

function drawTab(jsonData) {
  console.log(jsonData);
  const article = document.getElementById("transtab");
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

  if(jsonData.hasOwnProperty('e1')) {
    var table = document.createElement("table");

    var trg = document.createElement("tr");
    var trd = document.createElement("tr");
    var tra = document.createElement("tr");
    var tre = document.createElement("tr");

    drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.g1, jsonData.d1, jsonData.a1, jsonData.e1);
    
    if(jsonData.hasOwnProperty('e2')){
      drawRowsAndCols (true, true, trg, trd, tra, tre, jsonData.g2, jsonData.d2, jsonData.a2, jsonData.e2);
    }

    
    if(jsonData.hasOwnProperty('e3')){
      drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData.g3, jsonData.d3, jsonData.a3, jsonData.e3);
    }

    table.appendChild(trg);
    table.appendChild(trd);
    table.appendChild(tra);
    table.appendChild(tre);
    article.appendChild(table);

    if(jsonData.hasOwnProperty('e5')) {
      

      if(jsonData.hasOwnProperty('textb4verse1')) {
        var sometext = document.createElement("div");
        sometext.textContent = jsonData.textb4verse1;
        article.appendChild(sometext);
      }

      table = document.createElement("table");
      trg = document.createElement("tr");
      trd = document.createElement("tr");
      tra = document.createElement("tr");
      tre = document.createElement("tr");

      drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.g5, jsonData.d5, jsonData.a5, jsonData.e5);
    
      if(jsonData.hasOwnProperty('e6')){
        drawRowsAndCols (true, true, trg, trd, tra, tre, jsonData.g6, jsonData.d6, jsonData.a6, jsonData.e6);
      }

      
      if(jsonData.hasOwnProperty('e7')){
        drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData.g7, jsonData.d7, jsonData.a7, jsonData.e7);
      }

      if(jsonData.hasOwnProperty('e8')){
        drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData.g8, jsonData.d8, jsonData.a8, jsonData.e8);
      }

      table.appendChild(trg);
      table.appendChild(trd);
      table.appendChild(tra);
      table.appendChild(tre);
      article.appendChild(table);


      if(jsonData.hasOwnProperty('e9')) {
        if(jsonData.hasOwnProperty('textb4verse2')) {
          sometext = document.createElement("div");
          sometext.textContent = jsonData.textb4verse2;
          article.appendChild(sometext);
        }

        table = document.createElement("table");
        trg = document.createElement("tr");
        trd = document.createElement("tr");
        tra = document.createElement("tr");
        tre = document.createElement("tr");

        drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.g9, jsonData.d9, jsonData.a9, jsonData.e9);
      
        if(jsonData.hasOwnProperty('e10')){
          drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.g10, jsonData.d10, jsonData.a10, jsonData.e10);
        }

        
        if(jsonData.hasOwnProperty('e11')){
          drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.g11, jsonData.d11, jsonData.a11, jsonData.e11);
        }

        if(jsonData.hasOwnProperty('e12')){
          drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.g12, jsonData.d12, jsonData.a12, jsonData.e12);
        }

        table.appendChild(trg);
        table.appendChild(trd);
        table.appendChild(tra);
        table.appendChild(tre);
        article.appendChild(table);


      }


    }




    
  
    
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