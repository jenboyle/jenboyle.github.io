function loadGear(divelement: string) {
  fetch('https://groovyjen.com/resources/json/gear/gear.json')
    .then((response) => response.json())
    .then((json) => gear(json, divelement));
}

function gear(jsonData, divelement: string) {
  console.log(jsonData);
  const div = document.getElementById(divelement)!;

  if(jsonData.hasOwnProperty('gear')) {
    for (var i=0; i<jsonData.gear.length; i++) {
      const p = document.createElement("p");
      const article = document.createElement("article");

      p.textContent = jsonData.gear[i].title;
      article.append(p);
      div.append(article);

      for (var j=0; j<jsonData.gear[i].articles.length; j++) {
        const p = document.createElement("p");
        const article = document.createElement("article");

        p.textContent = jsonData.gear[i].articles[j].article;
        article.append(p);

        for(var im=1; im<6; im++) {
          var imfield = 'image'+im;
          if(jsonData.gear[i].articles[j].hasOwnProperty(imfield)) {
            const img = document.createElement("img");
            //img1.src = jsonData.gear[i].articles[j].image1;
            img.src = jsonData.gear[i].articles[j][imfield];
            img.className = "boximg";
            article.append(img);
          }

        }

        const adiv = document.createElement("div");
        adiv.textContent = emojiCheck(jsonData.gear[i].articles[j].description);

        if(jsonData.gear[i].articles[j].article.indexOf('Wants') != -1) {
          adiv.className = "divunderimgs";
        }
        article.append(adiv);

        div.append(article);
      }
    }

  }

}
