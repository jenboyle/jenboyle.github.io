function goTranscriptionChoice() {
  console.log('hi');

}

function loadTab(songname) {
  console.log(songname);
  fetch('https://groovyjen.com/' + songname + '.json')
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
    //make strings
    const pgstring = document.createElement("p");
    const pdstring = document.createElement("p");
    const pastring = document.createElement("p");
    const pestring = document.createElement("p");

    let gnotes = '|' + jsonData.gintro1;
    let dnotes = '|' + jsonData.dintro1;
    let anotes = '|' + jsonData.aintro1;
    let enotes = '|' + jsonData.eintro1;
    
    if(jsonData.hasOwnProperty('eintro2')){
      gnotes += jsonData.gintro2 + '|';
      dnotes += jsonData.dintro2 + '|';
      anotes += jsonData.aintro2 + '|';
      enotes += jsonData.eintro2 + '|';
    }

    if(jsonData.hasOwnProperty('eintro3')){
      gnotes += jsonData.gintro3;
      dnotes += jsonData.dintro3;
      anotes += jsonData.aintro3;
      enotes += jsonData.eintro3;
    }

    pgstring.textContent = gnotes;
    pdstring.textContent = dnotes;
    pastring.textContent = anotes;
    pestring.textContent = enotes;

    article.appendChild(pgstring);
    article.appendChild(pdstring);
    article.appendChild(pastring);
    article.appendChild(pestring);
  
    
  }

}