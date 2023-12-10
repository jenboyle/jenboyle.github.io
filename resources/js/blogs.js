function loadBlog(blogname, articleelement, ul) {
  console.log(blogname);
  //hide the ul
  document.getElementById(ul).style.display = "none";

  fetch('https://groovyjen.com/resources/json/blogs/' + blogname + '.json')
    .then((response) => response.json())
    .then((json) => blog(json, articleelement));
}

function blog(jsonData, articleelement) {
  console.log(jsonData);
  const article = document.getElementById(articleelement);
  article.innerHTML = '';

  const h1 = document.createElement("h1");
  h1.textContent = jsonData.h1;
  article.appendChild(h1);

  const pdate = document.createElement("p");
  pdate.textContent = jsonData.date;
  article.appendChild(pdate);

  if(jsonData.hasOwnProperty('paras')) {
    for (i=0; i<jsonData.paras; i++) {
      var index = i+1;
      var para = 'para' + index;
      const p = document.createElement("p");
      p.textContent = emojiCheck(jsonData[para]);
      article.appendChild(p);

      if(jsonData.hasOwnProperty('utube')) {
        if(jsonData.utubeplacement == index){
          const div = document.createElement("div");
          div.class = "iframedivmid";
          const iframe = document.createElement("iframe");
          iframe.width="420";
          iframe.height="315";
          iframe.src="https://youtube.com/embed/" + jsonData.utube;
          div.appendChild(iframe);
          article.appendChild(div);
        }
      }
    }
  }

}

function emojiCheck(text) {
  var emojitext = text;
  if(text.indexOf('0x1F') != -1){
    console.log("hasEmojis");
    var startindex = text.indexOf('0x1F');
    var endindex = text.indexOf('0x1F') + 7;
    emojitext = text.substring(0, startindex);
    emojitext = emojitext + String.fromCodePoint(text.substring(startindex, endindex));
    emojitext = emojitext + text.substring(endindex, text.length);

    if((emojitext.lastIndexOf('0x1F') != -1) && (emojitext.lastIndexOf('0x1F') > startindex)){
      // Two emojis
      var emojitext2 = emojitext;
      var startindex2 = emojitext.lastIndexOf('0x1F');
      var endindex2 = emojitext.lastIndexOf('0x1F') + 7;
      emojitext2 = emojitext.substring(0, startindex2);
      emojitext2 = emojitext2 + String.fromCodePoint(emojitext.substring(startindex2, endindex2));
      emojitext2 = emojitext2 + emojitext.substring(endindex2, emojitext.length);
      emojitext = emojitext2;
    }

  }
  return emojitext;
}