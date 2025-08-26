fetch("https://dummyjson.com/products/categories")
  
    .then(response => response.json())
    
    .then(data =>{
        let htmls = ""
        data.forEach(items => {
            htmls += `<div class="category-item">${items.name}</div>`
        });
        console.log(htmls);
        const divCategory = document.querySelector("#category");
        divCategory.innerHTML = htmls;
    })

  