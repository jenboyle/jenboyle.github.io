function loadGear(divelement) {
  fetch('https://groovyjen.com/resources/json/gear/gear.json')
    .then((response) => response.json())
    .then((json) => gear(json, divelement));
}

function gear(jsonData, divelement) {
  console.log(jsonData);
  const div = document.getElementById(divelement);

  if(jsonData.hasOwnProperty('gear')) {
    for (i=0; i<jsonData.gear.length; i++) {
      const p = document.createElement("p");
      const article = document.createElement("article");

      p.textContent = jsonData.gear[i].title;
      article.append(p);
      div.append(article);

      for (j=0; j<jsonData.gear[i].articles.length; j++) {
        const p = document.createElement("p");
        const article = document.createElement("article");

        p.textContent = jsonData.gear[i].articles[j].article;
        article.append(p);


        const img1 = document.createElement("img");
        img1.src = jsonData.gear[i].articles[j].image1;
        img1.className = "boximg";
        article.append(img1);

        if(jsonData.gear[i].articles[j].hasOwnProperty('image2')) {
          const img2 = document.createElement("img");
          img2.src = jsonData.gear[i].articles[j].image2;
          img2.className = "boximg";;
          article.append(img2);
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
      //for (i=0; i<jsonData.paras; i++) {

//  const h1 = document.createElement("h1");
//  h1.textContent = jsonData.h1;
//  article.appendChild(h1);
//
//  const pdate = document.createElement("p");
//  pdate.textContent = jsonData.date;
//  article.appendChild(pdate);
//
//  if(jsonData.hasOwnProperty('paras')) {
//    for (i=0; i<jsonData.paras; i++) {
//      var index = i+1;
//      var para = 'para' + index;
//      const p = document.createElement("p");
//      p.textContent = emojiCheck(jsonData[para]);
//      article.appendChild(p);
//
//      if(jsonData.hasOwnProperty('pic1') && jsonData.pic1placement.startsWith(''+index)) {
//        var pic1 = document.createElement("img");
//        pic1.src = "resources/images/blogs/" + jsonData.pic1;
//        if(jsonData.pic1placement.indexOf('_') != -1){
//          var divpic1 = document.createElement("div");
//          divpic1.appendChild(pic1);
//          article.appendChild(divpic1);
//        } else {
//          article.appendChild(pic1);
//        }
//
//      }
//
//      if(jsonData.hasOwnProperty('pic2') && jsonData.pic2placement.startsWith(''+index)) {
//        var pic2 = document.createElement("img");
//        pic2.src = "resources/images/blogs/" + jsonData.pic2;
//        if(jsonData.pic2placement.indexOf('_') != -1){
//          var divpic2 = document.createElement("div");
//          divpic2.appendChild(pic2);
//          article.appendChild(divpic2);
//        } else {
//          article.appendChild(pic2);
//        }
//      }
//
//      if(jsonData.hasOwnProperty('utube')) {
//        if(jsonData.utubeplacement == index){
//          const div = document.createElement("div");
//          div.class = "iframedivmid";
//          const iframe = document.createElement("iframe");
//          iframe.width="420";
//          iframe.height="315";
//          iframe.src="https://youtube.com/embed/" + jsonData.utube;
//          div.appendChild(iframe);
//          article.appendChild(div);
//        }
//      }
//    }
//  }

}