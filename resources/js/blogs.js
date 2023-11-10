function loadBlog(blogname, articleelement) {
  console.log(blogname);
  //hide the ul
  //document.getElementById(ul).style.display = "none";

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

  const p = document.createElement("p");
  p.textContent = jsonData.para1;
  article.appendChild(p);

  if(jsonData.hasOwnProperty('para2')) {
    const p2 = document.createElement("p");
    p2.textContent = jsonData.para2;
    article.appendChild(p2);
  }

    if(jsonData.hasOwnProperty('para3')) {
      const p3 = document.createElement("p");
      p3.textContent = jsonData.para3;
      article.appendChild(p3);
    }

    if(jsonData.hasOwnProperty('utube')) {
        const div = document.createElement("div");
        div.class = "iframedivmid";
        const iframe = document.createElement("iframe");
        iframe.width="420";
        iframe.height="315";
        iframe.src="https://youtube.com/embed/" + jsonData.utube;
        div.appendChild(iframe);
        article.appendChild(div);
    }

      if(jsonData.hasOwnProperty('para4')) {
        const p4 = document.createElement("p");
        p4.textContent = jsonData.para4;
        article.appendChild(p4);
      }

        if(jsonData.hasOwnProperty('para5')) {
          const p5 = document.createElement("p");
          p5.textContent = jsonData.para5;
          article.appendChild(p5);
        }



}