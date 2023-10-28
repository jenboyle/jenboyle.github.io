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
  const psong = document.createElement("p");
  psong.textContent = jsonData.song + ' - ' + jsonData.by;
  article.appendChild(psong);

  const pkey = document.createElement("p");
  pkey.textContent = 'Key: ' + jsonData.key;
  article.appendChild(pkey);

  const ptune = document.createElement("p");
  ptune.textContent = 'Tuning: ' + jsonData.tuning;
  article.appendChild(ptune);

  const pgstring = document.createElement("p");
  pgstring.textContent = '|' + jsonData.gintro1 + jsonData.gintro2 + '|' + jsonData.gintro3;
  article.appendChild(pgstring);

  const pdstring = document.createElement("p");
  pdstring.textContent = '|' + jsonData.dintro1 + jsonData.dintro2 + '|' + jsonData.dintro3;
  article.appendChild(pdstring);

  const pastring = document.createElement("p");
  pastring.textContent = '|' + jsonData.aintro1 + jsonData.aintro2 + '|' + jsonData.aintro3;
  article.appendChild(pastring);

  const pestring = document.createElement("p");
  pestring.textContent = '|' + jsonData.eintro1 + jsonData.eintro2 + '|' + jsonData.eintro3;
  article.appendChild(pestring);

}