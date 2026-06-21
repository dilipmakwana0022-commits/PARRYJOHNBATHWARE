const products=[

{
id:1,
name:"Wall Hung Toilet",
category:"Toilet",
image:"images/product1.jpg",
description:"Premium Wall Hung Toilet"
},

{
id:2,
name:"One Piece Toilet",
category:"Toilet",
image:"images/product2.jpg",
description:"Luxury One Piece Toilet"
},

{
id:3,
name:"Table Top Basin",
category:"Wash Basin",
image:"images/product3.jpg",
description:"Designer Wash Basin"
}

];

const grid=document.getElementById("productGrid");

const search=document.getElementById("searchBox");

const category=document.getElementById("categoryFilter");

function showProducts(){

grid.innerHTML="";

const keyword=search.value.toLowerCase();

const cat=category.value;

products

.filter(product=>{

const matchName=product.name.toLowerCase().includes(keyword);

const matchCategory=cat==="all" || product.category===cat;

return matchName && matchCategory;

})

.forEach(product=>{

grid.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.description}</p>

<span class="category">${product.category}</span>

<br><br>

<a class="btn"
href="product.html?id=${product.id}">

View Details

</a>

</div>

</div>

`;

});

}

showProducts();

search.addEventListener("input",showProducts);

category.addEventListener("change",showProducts);
