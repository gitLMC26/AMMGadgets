export const displayProd = (clickProdClass, sliderHide, productShow, prodImg, productName, priceProd) => { 
    function getClickProdId(){
        let prodDetails = JSON.parse(localStorage.getItem("Product Details"));  
        
        sliderHide.style.display = "none";

        productShow.style.display = "flex";

        let prodId = this.id; 
        let strProdClass = prodId.toString();
        let clickProd = document.getElementsByClassName(strProdClass);
        let node = null;
        console.log(clickProd);
        prodDetails = [];

        if(prodDetails!=null) 
        {
            let ProductId = prodId;

            prodDetails.push(ProductId);
            localStorage.setItem("Product Details", prodDetails);

            for(let i = 0; i<clickProd.length; i++)
            {
                node = clickProd[i].tagName;
                if(node == "IMG")
                {
                    let ImageSource = clickProd[i].src

                    prodDetails.push(ImageSource);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].src);
                }
        
                else if(node==="H3")
                {
                    let ProductName = clickProd[i].textContent

                    prodDetails.push(ProductName);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].textContent);
                }
        
                else if(node==="P")
                {
                    let ProductPrice = clickProd[i].textContent

                    prodDetails.push(ProductPrice);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].textContent);
                }
            }

            let prodImgSrc = prodDetails[1];
            console.log(prodImgSrc);
            let prodName = prodDetails[2];
            let prodPrice = prodDetails[3];
        
            prodImg.setAttribute("src", prodImgSrc);
            prodImg.id = prodId;
        
            productName.textContent = prodName;
            productName.id = prodId;
        
            let str = "\u20B1";
            priceProd.textContent = str+prodPrice;
            priceProd.id = prodId;
        }

        if(prodDetails===null) 
        {
            let ProductId = prodId;

            prodDetails.push(ProductId);
            localStorage.setItem("Product Details", prodDetails);

            for(let i = 0; i<clickProd.length; i++)
            {
                node = clickProd[i].tagName;
                if(node == "IMG")
                {
                    let ImageSource = clickProd[i].src

                    prodDetails.push(ImageSource);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].src);
                }
        
                else if(node==="H3")
                {
                    let ProductName = clickProd[i].textContent

                    prodDetails.push(ProductName);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].textContent);
                }
        
                else if(node==="P")
                {
                    let ProductPrice = clickProd[i].textContent

                    prodDetails.push(ProductPrice);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].textContent);
                }
            }

            let prodImgSrc = prodDetails[1];
            console.log(prodImgSrc);
            let prodName = prodDetails[2];
            let prodPrice = prodDetails[3];
        
            prodImg.setAttribute("src", prodImgSrc);
            prodImg.id = prodId;
        
            productName.textContent = prodName;
            productName.id = prodId;
        
            let str = "\u20B1";
            priceProd.textContent = str+prodPrice;
            priceProd.id = prodId;
        }
    }   
    
    for (var i = 0; i < clickProdClass.length; i++) {
        clickProdClass[i].addEventListener("click", getClickProdId);
    }  
}

// let cartProducts = JSON.parse(localStorage.getItem("Cart Products"));
// let lastCount = localStorage.getItem("Last Count");
// let productsID = JSON.parse(localStorage.getItem("Product ID"));
// let productIdPrice = JSON.parse(localStorage.getItem("Product Id Price"));
// let productPriceTotal = localStorage.getItem("Price Total");

// export const dispAddToCart = (clickBtn, dispQuantity, cartCounter) => {
//     if(lastCount===null)
//     {
//         cartCounter.textContent = "0";
//     }
    
//     clickBtn.addEventListener("click", addToCart);

//     function addToCart()
//     {
//         if(cartProducts===null)
//         {
//             let prodDetails = JSON.parse(localStorage.getItem("Product Details"));

//             localStorage.setItem("Last Count", ++lastCount);
//             cartCounter.textContent = lastCount;
//             console.log(cartCounter.textContent);

//             cartProducts = [];
//             productsID = [];
//             productIdPrice = [];

//             localStorage.setItem("Product Id", JSON.stringify(prodDetails[0]));
//             productsID.push(prodDetails[0]);
//             localStorage.setItem("Product ID", JSON.stringify(productsID));

//             let prodPrice = {
//                 ProductId: prodDetails[0],
//                 ProductPrice: prodDetails[3]
//             } 

//             localStorage.setItem("ProdIdPrice", JSON.stringify(prodPrice));
//             productIdPrice.push(prodPrice);
//             localStorage.setItem("Product Id Price", JSON.stringify(productIdPrice));

//             let ProdDetails = {
//                 ProductId: prodDetails[0],
//                 ImageSource: prodDetails[1],
//                 ProductName: prodDetails[2],
//                 ProductPrice: prodDetails[3],
//                 ProdQuantity: dispQuantity
//             }
//             localStorage.setItem("Product", JSON.stringify(ProdDetails));
//             cartProducts.push(ProdDetails);
//             localStorage.setItem("Cart Products", JSON.stringify(cartProducts));

//             let parseTotalPrice = parseInt(prodDetails[3]);

//             if(productPriceTotal===null)
//             {
//                 productPriceTotal = 0;
//                 let priceTotal = parseInt(productPriceTotal) + parseTotalPrice; 
                
//                 console.log(priceTotal);
//                 localStorage.setItem("Price Total", priceTotal);
//                 document.getElementById("totalPriceSpan").textContent = "Total: "+priceTotal;
//             }
//         }

//         else{
//             let prodDetails = JSON.parse(localStorage.getItem("Product Details"));
            
//             localStorage.setItem("Last Count",  ++lastCount);
//             cartCounter.textContent = lastCount;
//             console.log(cartCounter.textContent);
            
//             let ProdDetails = {
//                 ProductId: prodDetails[0],
//                 ImageSource: prodDetails[1],
//                 ProductName: prodDetails[2],
//                 ProductPrice: prodDetails[3],
//                 ProdQuantity: dispQuantity
//             }

//             localStorage.setItem("Product", JSON.stringify(ProdDetails));
//             cartProducts.push(ProdDetails);
//             localStorage.setItem("Cart Products", JSON.stringify(cartProducts));
//         }
//     }
// }

