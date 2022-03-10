const article  = document.querySelector('article');

console.log(article.children);

console.log(Array.from(article.children))

Array.from(article.children).forEach((child) =>{
    child.style.color='red';
})


