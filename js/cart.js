// Open and Close Cart Modal
export const clickCart = (cartIcon, modalClass) => {   
    const displayCart = () => {
        modalClass.style.visibility = "visible";
    }
    cartIcon.addEventListener("click", displayCart);
}

export const clickClose = (close, closeModal) => {
    const closeCart = () => {
        closeModal.style.visibility = "hidden";
    }

    close.addEventListener("click", closeCart);
}

// Store products to localstorage
let lastCount = sessionStorage.getItem("Last Count");
let addedProducts = JSON.parse(localStorage.getItem("Cart Products"));
let productsID = JSON.parse(localStorage.getItem("Product ID"));
// let productIdPrice = JSON.parse(localStorage.getItem("Product Id Price"));
// let productPriceTotal = JSON.parse(localStorage.getItem("Price Total"));

// let totalPriceProd = 0;

export const storeProdCart = (btnClass, cartCounter) => {
    function store() {
        event.stopPropagation();
        let prodId = this.id;
        const checkProduct = (id) => {
            return id==prodId;
        }

        let prodClickDiv = document.getElementsByClassName(prodId);
        console.log(prodClickDiv);

        if(addedProducts===null)
        {
            addedProducts = [];
            productsID = [];
            // productIdPrice = [];

            if(lastCount===null)
            {
                localStorage.setItem("Last Count", ++lastCount);
            }

            let prodDetails = {
                ProductId: prodId,
                ImageSource: prodClickDiv[0].src,
                ProductName: prodClickDiv[1].textContent,
                ProductPrice: prodClickDiv[2].textContent,
                ProdQuantity: 1
            }

            // let prodPrice = {
            //     ProductId: parentId,
            //     ProductPrice: childProdPrice.textContent
            // }   
    
            // localStorage.setItem("ProdIdPrice", JSON.stringify(prodPrice));
            // productIdPrice.push(prodPrice);
            // localStorage.setItem("Product Id Price", JSON.stringify(productIdPrice));

            // let parseTotalPrice = parseInt(childProdPrice.textContent);
            // totalPriceProd += parseTotalPrice; 
            // localStorage.setItem("Price Total", JSON.stringify(totalPriceProd));
            // document.getElementById("totalPriceSpan").textContent = "Total: "+totalPriceProd;
    
            localStorage.setItem("Product Id", JSON.stringify(prodId));
            productsID.push(prodId);
            localStorage.setItem("Product ID", JSON.stringify(productsID));

            localStorage.setItem("Product", JSON.stringify(prodDetails));
            addedProducts.push(prodDetails);
            localStorage.setItem("Cart Products", JSON.stringify(addedProducts));
            console.log(addedProducts);
        }

        else
        {   
            let arrayProd = Object.values(productsID);
            console.log(arrayProd);
            let storedProdId = arrayProd.find(checkProduct);

            if(storedProdId===prodId)
            {   
                alert("Item added already!");
            }

            else
            {
                localStorage.setItem("Last Count",  ++lastCount);
        
                // let childImg = prodClickDiv.children[0];
                // let childProdName = prodClickDiv.children[1];
                // let childProdPrice = prodClickDiv.children[2];

                // console.log(childImg);
                // console.log(childProdName);
        
                let prodDetails = {
                    ProductId: prodId,
                    ImageSource: prodClickDiv[0].src,
                    ProductName: prodClickDiv[1].textContent,
                    ProductPrice: prodClickDiv[2].textContent,
                    ProdQuantity: 1
                }

                // let prodPrice = {
                //     ProductId: parentId,
                //     ProductPrice: childProdPrice.textContent
                // }   
        
                // localStorage.setItem("ProdIdPrice", JSON.stringify(prodPrice));
                // productIdPrice.push(prodPrice);
                // localStorage.setItem("Product Id Price", JSON.stringify(productIdPrice));

                // let parseTotalPrice = parseInt(childProdPrice.textContent)
                // totalPriceProd += parseTotalPrice; 
                // localStorage.setItem("Price Total", JSON.stringify(totalPriceProd));
                // document.getElementById("totalPriceSpan").textContent = "Total: "+totalPriceProd;

                localStorage.setItem("Product Id", JSON.stringify(prodId));
                productsID.push(prodId);
                localStorage.setItem("Product ID", JSON.stringify(productsID));

                localStorage.setItem("Product", JSON.stringify(prodDetails));
                addedProducts.push(prodDetails);
                localStorage.setItem("Cart Products", JSON.stringify(addedProducts));   
            }
        }
        cartCounter.textContent = lastCount; 
        console.log(cartCounter.textContent);
    }
       
    for (var i = 0; i < btnClass.length; i++) {
        btnClass[i].addEventListener("click", store);
    } 
}

// // display addtocart products *refresh
export const displayCartProd = (cartDivCenter,prodQuantity,cartIcon) => {
    for(let i in addedProducts)
    {
        let addedProdDiv = document.createElement("div");
        addedProdDiv.classList = "addedProdDiv";
        addedProdDiv.id = "div"+addedProducts[i].ProductId;
        addedProdDiv.style.borderBottom = "1px solid black";
        addedProdDiv.style.padding = "4px";
        
        let prodImageDiv = document.createElement("div");
        prodImageDiv.classList = "cartProdImgDiv";
        let imgTag = document.createElement("img");
        imgTag.classList = "cartProdImg";
        imgTag.setAttribute("src", addedProducts[i].ImageSource);
    
        let cartProdDescDiv = document.createElement("div");
        cartProdDescDiv.classList = "cartProdDescDiv";
        cartProdDescDiv.id = "cartProdDescDiv"+i;
        let cartProdName = document.createElement("p");
        cartProdName.classList = "cartProdName";
        cartProdName.textContent = addedProducts[i].ProductName;
        
        let prodQuantity = document.createElement("input");
        prodQuantity.className = "prodQuantity";
        prodQuantity.id = addedProducts[i].ProductId;
        prodQuantity.setAttribute("type", "number");
        prodQuantity.setAttribute("value", addedProducts[i].ProdQuantity);
        prodQuantity.style.border = "1px solid black";
        prodQuantity.style.width = "50px";

        let cartProdPrice = document.createElement("span");
        cartProdPrice.classList = "cartProdPrice";
        cartProdPrice.textContent = addedProducts[i].ProductPrice;
        
        let deleteDiv = document.createElement("div");
        deleteDiv.classList = "deleteDiv";
        let removeProd = document.createElement("span");
        removeProd.classList = "material-symbols-rounded"; 
        removeProd.textContent = "delete";
        // removeProd.addEventListener("click", removeProduct);

        // let parseTotalPrice = parseInt(addedProducts[i].ProductPrice)
        // totalPriceProd += parseTotalPrice; 
        // localStorage.setItem("Price Total", JSON.stringify(totalPriceProd));

        cartDivCenter.appendChild(addedProdDiv);
        addedProdDiv.appendChild(prodImageDiv);
        addedProdDiv.appendChild(cartProdDescDiv);
        prodImageDiv.appendChild(imgTag);
        cartProdDescDiv.appendChild(cartProdName);
        cartProdDescDiv.appendChild(prodQuantity);
        cartProdDescDiv.appendChild(cartProdPrice);
        addedProdDiv.appendChild(deleteDiv);
        deleteDiv.appendChild(removeProd);

        // function removeProduct(){
        //     let productPriceTotal = JSON.parse(localStorage.getItem("Price Total"));
        //     let remProd = document.getElementById(addedProdDiv.id);
        //     let remPriceParent = this.parentNode.id;
        //     let remPriceId = document.querySelector("#"+remPriceParent);
        //     let priceRem = remPriceId.children[2].textContent;
        //     let parsePrice = parseInt(priceRem);
        //     let remPriceTotal = productPriceTotal - parsePrice;
        //     let remPriceTotalStr = remPriceTotal.toString();
        //     const pos = addedProducts.map(e => e.ProductId).indexOf(addedProducts[i]);
        //     console.log(pos);
            
        //     remProd.remove();
        //     addedProducts.splice(pos, 1);
        //     productsID.splice(pos, 1);
        //     sessionStorage.setItem("Last Count", --lastCount);
        //     cartCount.textContent = lastCount; 
        //     cartIcon.appendChild(cartCount);
            
        //     if(lastCount==0)
        //     {
        //         cartCount.textContent = ""; 
        //         cartIcon.appendChild(cartCount);
        //         sessionStorage.setItem("Last Count", "");
        //     }
        //     document.getElementById("totalPriceSpan").textContent = "Total: "+remPriceTotalStr;

        //     localStorage.setItem("Price Total",JSON.stringify(remPriceTotalStr));
        //     localStorage.setItem("Product ID", JSON.stringify(productsID));
        //     localStorage.setItem("Cart Products", JSON.stringify(addedProducts));
        // }
    }

    // let totalPrice = document.createElement("div");
    // totalPrice.classList = "totalPrice";
    // totalPrice.id = "totalPrice";
    // let totalPriceSpan = document.createElement("span");
    // totalPriceSpan.id = "totalPriceSpan";
    // totalPriceSpan.textContent = "Total: "+productPriceTotal;

    // let checkOutDiv = document.createElement("div");
    // checkOutDiv.classList = "checkOutDiv";
    // let checkOutBtn = document.createElement("button");
    // checkOutBtn.classList = "checkOutBtn";
    // checkOutBtn.textContent = "Checkout";

    // cartDivCenter.appendChild(totalPrice);
    // cartDivCenter.appendChild(checkOutDiv);
    // checkOutDiv.appendChild(checkOutBtn);
    // totalPrice.appendChild(totalPriceSpan);

    // function prodQuantityF(){ 
    //     let totalPriceProd = 0;
    //     let qValueId = this.id;
    //     let parentQDivId = this.parentNode.id;
    //     let parentQDiv = document.querySelector("#"+parentQDivId);
    //     let qValue = document.querySelector("#"+qValueId).value;
    
    //     for(let i in addedProducts)
    //     {
    //         if(productIdPrice[i].ProductId===qValueId)
    //         {
    //             let prodPriceFin = parseInt(productIdPrice[i].ProductPrice)*qValue;
    //             parentQDiv.children[2].textContent = prodPriceFin.toString();
                
    //             let prodDetails = {
    //                 ProductId: addedProducts[i].ProductId,
    //                 ImageSource: addedProducts[i].ImageSource,
    //                 ProductName: addedProducts[i].ProductName,
    //                 ProductPrice: prodPriceFin,
    //                 ProdQuantity: qValue
    //             }

    //             addedProducts.splice(i, 1);
    //             productsID.splice(i, 1);
    //             addedProducts.push(prodDetails);
    //             localStorage.setItem("Cart Products", JSON.stringify(addedProducts));
    //             productsID.push(qValueId);
    //             localStorage.setItem("Product ID", JSON.stringify(productsID));
    
    //             console.log(prodPriceFin+"Hoy");
    //         }
    //             let parseTotalPrice = parseInt(addedProducts[i].ProductPrice)

    //             totalPriceProd += parseTotalPrice; 
    //             localStorage.setItem("Price Total", JSON.stringify(totalPriceProd));
    //     }
    //     document.getElementById(qValueId).value = qValue;
    //     document.getElementById("totalPriceSpan").textContent = "Total: "+totalPriceProd;
    // }

    // for(let i=0; i<prodQuantity.length; i++)
    // {
    //     prodQuantity[i].addEventListener("change", prodQuantityF);
    // }
}


