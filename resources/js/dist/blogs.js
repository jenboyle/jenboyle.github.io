"use strict";
function showBlogs(div, ul) {
    document.getElementById(div).style.display = "none";
    document.getElementById(ul).style.display = "";
}
function loadBlog(blogname, articleelement, ul, div) {
    console.log(blogname);
    //hide the ul
    document.getElementById(ul).style.display = "none";
    const div1 = document.getElementById(div);
    div1.classList.remove('showblogs');
    div1.style.display = "";
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
    if (jsonData.hasOwnProperty('paras')) {
        for (var i = 0; i < jsonData.paras; i++) {
            var index = i + 1;
            var para = 'para' + index;
            const p = document.createElement("p");
            p.textContent = emojiCheck(jsonData[para]);
            article.appendChild(p);
            if (jsonData.hasOwnProperty('pic1') && jsonData.pic1placement.startsWith('' + index)) {
                var pic1 = document.createElement("img");
                pic1.src = "resources/images/blogs/" + jsonData.pic1;
                if (jsonData.pic1placement.indexOf('_') != -1) {
                    var divpic1 = document.createElement("div");
                    divpic1.appendChild(pic1);
                    article.appendChild(divpic1);
                }
                else {
                    article.appendChild(pic1);
                }
            }
            if (jsonData.hasOwnProperty('pic2') && jsonData.pic2placement.startsWith('' + index)) {
                var pic2 = document.createElement("img");
                pic2.src = "resources/images/blogs/" + jsonData.pic2;
                if (jsonData.pic2placement.indexOf('_') != -1) {
                    var divpic2 = document.createElement("div");
                    divpic2.appendChild(pic2);
                    article.appendChild(divpic2);
                }
                else {
                    article.appendChild(pic2);
                }
            }
            if (jsonData.hasOwnProperty('utube')) {
                if (jsonData.utubeplacement == index) {
                    const div = document.createElement("div");
                    div.className = "iframedivmid";
                    const iframe = document.createElement("iframe");
                    iframe.width = "420";
                    iframe.height = "315";
                    iframe.src = "https://youtube.com/embed/" + jsonData.utube;
                    div.appendChild(iframe);
                    article.appendChild(div);
                }
            }
        }
    }
}
