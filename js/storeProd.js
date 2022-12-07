export const displayProd = (prodId) => {
    let strProdClass = prodId.toString();
    let clickProd = document.getElementsByClassName(strProdClass);
    let node = null;
    console.log(clickProd);
    let prodDetails = JSON.parse(localStorage.getItem("Product Details"));  
    prodDetails = [];

    if(prodDetails!=null) 
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
    }
    window.location.assign('displayProd.html');
}