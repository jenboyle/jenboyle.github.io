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

  if(jsonData.hasOwnProperty('eintro1')) {
    var table = document.createElement("table");

    var trg = document.createElement("tr");
    var trd = document.createElement("tr");
    var tra = document.createElement("tr");
    var tre = document.createElement("tr");

    drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.gintro1, jsonData.dintro1, jsonData.aintro1, jsonData.eintro1);
    
    if(jsonData.hasOwnProperty('eintro2')){
      drawRowsAndCols (true, true, trg, trd, tra, tre, jsonData.gintro2, jsonData.dintro2, jsonData.aintro2, jsonData.eintro2);
    }

    
    if(jsonData.hasOwnProperty('eintro3')){
      drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData.gintro3, jsonData.dintro3, jsonData.aintro3, jsonData.eintro3);
    }

    table.appendChild(trg);
    table.appendChild(trd);
    table.appendChild(tra);
    table.appendChild(tre);
    article.appendChild(table);

    if(jsonData.hasOwnProperty('everse1')) {
      

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

      drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.gverse1, jsonData.dverse1, jsonData.averse1, jsonData.everse1);
    
      if(jsonData.hasOwnProperty('everse2')){
        drawRowsAndCols (true, true, trg, trd, tra, tre, jsonData.gverse2, jsonData.dverse2, jsonData.averse2, jsonData.everse2);
      }

      
      if(jsonData.hasOwnProperty('everse3')){
        drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData.gverse3, jsonData.dverse3, jsonData.averse3, jsonData.everse3);
      }

      if(jsonData.hasOwnProperty('everse4')){
        drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData.gverse4, jsonData.dverse4, jsonData.averse4, jsonData.everse4);
      }

      table.appendChild(trg);
      table.appendChild(trd);
      table.appendChild(tra);
      table.appendChild(tre);
      article.appendChild(table);


      if(jsonData.hasOwnProperty('everse5')) {
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

        drawRowsAndCols (true, false, trg, trd, tra, tre, jsonData.gverse5, jsonData.dverse5, jsonData.averse5, jsonData.everse5);
      
        if(jsonData.hasOwnProperty('everse6')){
          drawRowsAndCols (true, true, trg, trd, tra, tre, jsonData.gverse6, jsonData.dverse6, jsonData.averse6, jsonData.everse6);
        }

        
        if(jsonData.hasOwnProperty('everse7')){
          drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData.gverse7, jsonData.dverse7, jsonData.averse7, jsonData.everse7);
        }

        if(jsonData.hasOwnProperty('everse8')){
          drawRowsAndCols (false, false, trg, trd, tra, tre, jsonData.gverse8, jsonData.dverse8, jsonData.averse8, jsonData.everse8);
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