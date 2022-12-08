export const displayProd = (clickProdClass, sliderHide, productShow, prodImg, productName, priceProd) => { 
    let prodDetails = JSON.parse(localStorage.getItem("Product Details"));  

    function getClickProdId(){
        
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
            let productId = {
                ProductId: prodId
            }

            localStorage.setItem("Product Id", JSON.stringify(productId));
            prodDetails.push(productId);
            localStorage.setItem("Product Details", prodDetails);

            for(let i = 0; i<clickProd.length; i++)
            {
                node = clickProd[i].tagName;

                if(node == "IMG")
                {
                    let prodImgObj = {
                        ImageSource: clickProd[i].src
                    }

                    localStorage.setItem("Product Image Source", JSON.stringify(prodImgObj));
                    prodDetails.push(prodImgObj);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].src);
                }
        
                else if(node==="H3")
                {
                    let prodNameObj = {
                        ProductName: clickProd[i].textContent
                    }

                    localStorage.setItem("Product Name", JSON.stringify(prodNameObj));
                    prodDetails.push(prodNameObj);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].textContent);
                }
        
                else if(node==="P")
                {
                    let prodPriceObj = {
                        ProductPrice: clickProd[i].textContent
                    }

                    localStorage.setItem("Product Price", JSON.stringify(prodPriceObj));
                    prodDetails.push(prodPriceObj);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails))
                    console.log(clickProd[i].textContent);
                }
            }

            let prodImgSrc = prodDetails[1].ImageSource;
            let prodName = prodDetails[2].ProductName;
            let prodPrice = prodDetails[3].ProductPrice;
        
            prodImg.setAttribute("src", prodImgSrc);
        
            productName.textContent = prodName;
        
            let str = "\u20B1";
            priceProd.textContent = str+prodPrice;
        }

        if(prodDetails===null) 
        {
            for(let i = 0; i<clickProd.length; i++)
            {
                node = clickProd[i].tagName;
                if(node == "IMG")
                {
                    let prodImgObj = {
                                ImageSource: clickProd[i].src
                            }

                    localStorage.setItem("Product Image Source", JSON.stringify(prodImgObj));
                    prodDetails.push(prodImgObj);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].src);
                }
        
                else if(node==="H3")
                {
                    let prodNameObj = {
                        ProductName: clickProd[i].textContent
                    }

                    localStorage.setItem("Product Name", JSON.stringify(prodNameObj));
                    prodDetails.push(prodNameObj);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails));
                    console.log(clickProd[i].textContent);
                }
        
                else if(node==="P")
                {
                    let prodPriceObj = {
                        ProductPrice: clickProd[i].textContent
                    }

                    localStorage.setItem("Product Price", JSON.stringify(prodPriceObj));
                    prodDetails.push(prodPriceObj);
                    localStorage.setItem("Product Details", JSON.stringify(prodDetails))
                    console.log(clickProd[i].textContent);
                }
            }
            let prodImgSrc = prodDetails[0].ImageSource;
            let prodName = prodDetails[1].ProductName;
            let prodPrice = prodDetails[2].ProductPrice;
        
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

export const dispAddToCart = (clickBtn, dispQuantity) => {
    let productDetails = JSON.parse(localStorage.getItem("Product Details"));
    let cartProducts = JSON.parse(localStorage.getItem("Cart Products"));
    clickBtn.addEventListener("click", addToCart);
    let prodPrice = parseInt()*dispQuantity;
    // productDetails.map(x => console.log(x.ProductPrice));

    productDetails = [];

    function addToCart(){
        if(cartProducts===null)
        {
            // let prodPrice = parseInt(productDetails.map(x => x.ProductPrice))*dispQuantity;
            let prodDetails = {
                ProductId: productDetails.map(x => x.ProductId),
                ImageSource: productDetails.map(x => x.ImageSource),
                ProductName: productDetails.map(x => x.ProductName),
                ProductPrice: prodPrice,
                ProdQuantity: dispQuantity
            }

            localStorage.setItem("Cart Products", JSON.stringify(prodDetails));
        }
    }
}

