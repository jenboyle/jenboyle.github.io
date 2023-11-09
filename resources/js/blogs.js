function loadBlog(blogname, articleelement) {
  console.log(blogname);
  //hide the ul
  //document.getElementById(ul).style.display = "none";

  fetch('https://groovyjen.com/resources/blogs/' + blogname + '.html')
    .then((response) => blog(response, articleelement));
}

function blog(response, articleelement) {
  console.log(response);
  const article = document.getElementById(articleelement);
  article.innerHTML = '';
  article.textContent = response;
}