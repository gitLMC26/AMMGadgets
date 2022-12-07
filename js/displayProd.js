let retrieveProduct = localStorage.getItem("Product Details");
let productDetails = JSON.parse(retrieveProduct);

let prodImgSrc = productDetails[0].ImageSource;
let prodName = productDetails[1].ProductName;
let prodPrice = productDetails[2].ProductPrice;

let prodImageDiv = document.querySelector(".imgSrc");
let imgSrc = document.createElement("img");
imgSrc.setAttribute("src", prodImgSrc);
prodImageDiv.appendChild(imgSrc);

let prodNamePrice = document.querySelector(".prodDesc");
let nameProd = document.createElement("p");
nameProd.textContent = prodName;
prodNamePrice.appendChild(nameProd);

let priceProd = document.createElement("span");
priceProd.textContent = prodPrice;
prodNamePrice.appendChild(priceProd);

console.log(imgSrc);
console.log(nameProd);
console.log(priceProd);