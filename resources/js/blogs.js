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

}