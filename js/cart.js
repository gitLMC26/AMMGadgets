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
let lastCount = localStorage.getItem("Last Count");
let addedProducts = JSON.parse(localStorage.getItem("Cart Products"));
let productsID = JSON.parse(localStorage.getItem("Product ID"));
let productIdPrice = JSON.parse(localStorage.getItem("Product Id Price"));
let productPriceTotal = localStorage.getItem("Price Total");

export const storeProdCart = (btnClass, cartCounter) => {
    if(lastCount===null)
    {
        cartCounter.textContent = "0";
    }

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
            productIdPrice = [];

            localStorage.setItem("Last Count", ++lastCount);
            cartCounter.textContent = lastCount;
            console.log(cartCounter.textContent);

            let prodDetails = {
                ProductId: prodId,
                ImageSource: prodClickDiv[0].src,
                ProductName: prodClickDiv[1].textContent,
                ProductPrice: prodClickDiv[2].textContent,
                ProdQuantity: 1
            }

            let prodPrice = {
                ProductId: prodId,
                ProductPrice: prodClickDiv[2].textContent
            }   
    
            localStorage.setItem("ProdIdPrice", JSON.stringify(prodPrice));
            productIdPrice.push(prodPrice);
            localStorage.setItem("Product Id Price", JSON.stringify(productIdPrice));

            let parseTotalPrice = parseInt(prodClickDiv[2].textContent);
            
            if(productPriceTotal===null)
            {
                productPriceTotal = 0;
                let priceTotal = parseInt(productPriceTotal) + parseTotalPrice; 
                
                console.log(priceTotal);
                localStorage.setItem("Price Total", priceTotal);
                document.getElementById("totalPriceSpan").textContent = "Total: "+priceTotal;
            }
    
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
                cartCounter.textContent = lastCount;
                console.log(cartCounter.textContent);
            }

            else
            {
                localStorage.setItem("Last Count",  ++lastCount);
                cartCounter.textContent = lastCount;
                console.log(cartCounter.textContent);
        
                let prodDetails = {
                    ProductId: prodId,
                    ImageSource: prodClickDiv[0].src,
                    ProductName: prodClickDiv[1].textContent,
                    ProductPrice: prodClickDiv[2].textContent,
                    ProdQuantity: 1
                }

                let prodPrice = {
                    ProductId: prodId,
                    ProductPrice: prodClickDiv[2].textContent
                }   
        
                localStorage.setItem("ProdIdPrice", JSON.stringify(prodPrice));
                productIdPrice.push(prodPrice);
                localStorage.setItem("Product Id Price", JSON.stringify(productIdPrice));

                let parseTotalPrice = parseInt(prodClickDiv[2].textContent);
                let priceTotal = parseInt(productPriceTotal) + parseTotalPrice; 
                localStorage.setItem("Price Total", priceTotal);
                document.getElementById("totalPriceSpan").textContent = "Total: "+priceTotal;

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
        location.reload();
    }
       
    for (var i = 0; i < btnClass.length; i++) {
        btnClass[i].addEventListener("click", store);
    } 
    cartCounter.textContent = lastCount;
    console.log(cartCounter.textContent);

    if(isNaN(productPriceTotal) || productPriceTotal===0)
    {   
        let str = "\u20B1";
        let productPriceTotal = 0;
        localStorage.setItem("Price Total", productPriceTotal)
        document.getElementById("totalPriceSpan").textContent = "Total: "+str+productPriceTotal;
    }
}

// Add to cart view product
export const dispAddToCart = (clickBtn, dispQuantity, cartCounter) => {
    if(lastCount===null)
    {
        cartCounter.textContent = "0";
    }
    
    clickBtn.addEventListener("click", addToCart);

    function addToCart()
    {
        let prodDetails = JSON.parse(localStorage.getItem("Product Details"));

        let prodId = prodDetails[0];
        const checkProduct = (id) => {
            return id==prodId;
        }

        if(addedProducts===null)
        {
            localStorage.setItem("Last Count", ++lastCount);
            cartCounter.textContent = lastCount;
            console.log(cartCounter.textContent);

            addedProducts = [];
            productsID = [];
            productIdPrice = [];

            localStorage.setItem("Product Id", JSON.stringify(prodDetails[0]));
            productsID.push(prodDetails[0]);
            localStorage.setItem("Product ID", JSON.stringify(productsID));

            let prodPrice = {
                ProductId: prodDetails[0],
                ProductPrice: prodDetails[3]
            } 

            localStorage.setItem("ProdIdPrice", JSON.stringify(prodPrice));
            productIdPrice.push(prodPrice);
            localStorage.setItem("Product Id Price", JSON.stringify(productIdPrice));

            let ProdDetails = {
                ProductId: prodDetails[0],
                ImageSource: prodDetails[1],
                ProductName: prodDetails[2],
                ProductPrice: prodDetails[3],
                ProdQuantity: dispQuantity
            }
            localStorage.setItem("Product", JSON.stringify(ProdDetails));
            addedProducts.push(ProdDetails);
            localStorage.setItem("Cart Products", JSON.stringify(addedProducts));

            let parseTotalPrice = parseInt(prodDetails[3]);

            if(productPriceTotal===null)
            {
                productPriceTotal = 0;
                let priceTotal = parseInt(productPriceTotal) + parseTotalPrice; 
                
                console.log(priceTotal);
                localStorage.setItem("Price Total", priceTotal);
                document.getElementById("totalPriceSpan").textContent = "Total: "+priceTotal;
            }
        }

        else{
            let prodDetails = JSON.parse(localStorage.getItem("Product Details"));
            
            let arrayProd = Object.values(productsID);
            console.log(arrayProd);
            let storedProdId = arrayProd.find(checkProduct);

            if(storedProdId===prodId)
            {   
                alert("Item added already!");
                cartCounter.textContent = lastCount;
                console.log(cartCounter.textContent);
            }

            else
            {
                localStorage.setItem("Last Count", ++lastCount);
                cartCounter.textContent = lastCount;
                console.log(cartCounter.textContent);
    
                localStorage.setItem("Product Id", JSON.stringify(prodDetails[0]));
                productsID.push(prodDetails[0]);
                localStorage.setItem("Product ID", JSON.stringify(productsID));
    
                let prodPrice = {
                    ProductId: prodDetails[0],
                    ProductPrice: prodDetails[3]
                } 
    
                localStorage.setItem("ProdIdPrice", JSON.stringify(prodPrice));
                productIdPrice.push(prodPrice);
                localStorage.setItem("Product Id Price", JSON.stringify(productIdPrice));
    
                let ProdDetails = {
                    ProductId: prodDetails[0],
                    ImageSource: prodDetails[1],
                    ProductName: prodDetails[2],
                    ProductPrice: prodDetails[3],
                    ProdQuantity: dispQuantity
                }

                localStorage.setItem("Product", JSON.stringify(ProdDetails));
                addedProducts.push(ProdDetails);
                localStorage.setItem("Cart Products", JSON.stringify(addedProducts));
    
                let parseTotalPrice = parseInt(prodDetails[3]);
    
                if(productPriceTotal===null)
                {
                    productPriceTotal = 0;
                    let priceTotal = parseInt(productPriceTotal) + parseTotalPrice; 
                    
                    console.log(priceTotal);
                    localStorage.setItem("Price Total", priceTotal);
                    document.getElementById("totalPriceSpan").textContent = "Total: "+priceTotal;
                }
            }
        }
        cartCounter.textContent = lastCount; 
        console.log(cartCounter.textContent);
        location.reload();
    }
}

// // display addtocart products *refresh
export const displayCartProd = (cartDivCenter,prodQuantity, counter) => {
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
        cartProdDescDiv.id = "cartProdDescDiv"+addedProducts[i].ProductId;
        let cartProdName = document.createElement("p");
        cartProdName.classList = "cartProdName";
        cartProdName.textContent = addedProducts[i].ProductName;
        
        let prodQuantity = document.createElement("input");
        prodQuantity.className = "prodQuantity";
        prodQuantity.id = addedProducts[i].ProductId;
        prodQuantity.setAttribute("min", "1");
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
        removeProd.id = addedProducts[i].ProductId;
        console.log(removeProd.id);
        removeProd.classList = "material-symbols-rounded"; 
        removeProd.textContent = "delete";
        removeProd.addEventListener("click", removeProduct);

        localStorage.setItem("Price Total", productPriceTotal);

        cartDivCenter.appendChild(addedProdDiv);
        addedProdDiv.appendChild(prodImageDiv);
        addedProdDiv.appendChild(cartProdDescDiv);
        prodImageDiv.appendChild(imgTag);
        cartProdDescDiv.appendChild(cartProdName);
        cartProdDescDiv.appendChild(prodQuantity);
        cartProdDescDiv.appendChild(cartProdPrice);
        addedProdDiv.appendChild(deleteDiv);
        deleteDiv.appendChild(removeProd);

        function removeProduct(){
            let productPriceTotal = localStorage.getItem("Price Total");
            let remProd = document.getElementById(addedProdDiv.id);
            let remPriceParent = this.id;
            let remPriceId = document.querySelector("#cartProdDescDiv"+remPriceParent);
            console.log(productPriceTotal);
            let priceRem = remPriceId.children[2].textContent;
            let parsePrice = parseInt(priceRem);
            console.log(priceRem);
            let remPriceTotal = parseInt(productPriceTotal) - parsePrice;
            let remPriceTotalStr = remPriceTotal.toString();
        
            addedProducts = addedProducts.filter((obj) => obj.ProductId != remPriceParent);
            productsID = productsID.filter((obj) => obj != remPriceParent);
            productIdPrice = productIdPrice.filter((obj) => obj.ProductId != remPriceParent);

            remProd.remove();

            localStorage.setItem("Last Count", lastCount-=1);
            counter.textContent = lastCount;

            if(lastCount===0)
            {
                counter.textContent = "";
            }

            if(isNaN(productPriceTotal) || productPriceTotal===0)
            {
                let productPriceTotal = 0;
                localStorage.setItem("Price Total", productPriceTotal)
                document.getElementById("totalPriceSpan").textContent = "Total: "+productPriceTotal;
            }

            localStorage.setItem("Price Total",remPriceTotalStr);
            localStorage.setItem("Product ID", JSON.stringify(productsID));
            localStorage.setItem("Product Id Price", JSON.stringify(productIdPrice))
            localStorage.setItem("Cart Products", JSON.stringify(addedProducts));

            document.getElementById("totalPriceSpan").textContent = "Total: "+remPriceTotalStr;
        }
    }
    
    // let priceTotal = parseInt(productPriceTotal);
    let totalPrice = document.createElement("div");
    totalPrice.classList = "totalPrice";
    totalPrice.id = "totalPrice";
    let totalPriceSpan = document.createElement("span");
    totalPriceSpan.id = "totalPriceSpan";
    totalPriceSpan.textContent = "Total: "+productPriceTotal;

    let checkOutDiv = document.createElement("div");
    checkOutDiv.classList = "checkOutDiv";
    let checkOutBtn = document.createElement("button");
    checkOutBtn.classList = "btn";
    checkOutBtn.textContent = "Checkout";
    checkOutBtn.addEventListener("click", checkOut);

    function checkOut()
    {
        if(productPriceTotal===0 || productPriceTotal==="0")
        {
            alert("There's no item in your cart!");
        }

        else{
            window.location.href = "checkout.html";
        }
    }

    cartDivCenter.appendChild(totalPrice);
    cartDivCenter.appendChild(checkOutDiv);
    checkOutDiv.appendChild(checkOutBtn);
    totalPrice.appendChild(totalPriceSpan);

    function prodQuantityF(){ 
        // let totalPriceProd = parseInt(productPriceTotal);
        let qValueId = this.id;
        let parentQDivId = this.parentNode.id;
        let parentQDiv = document.querySelector("#"+parentQDivId);
        let qValue = document.querySelector("#"+qValueId).value;
        
        const index = addedProducts.findIndex(object => {
          return object.ProductId === qValueId;
        });

        // if true
        if (index !== -1) { 
            let prodPriceFin = parseInt(productIdPrice[index].ProductPrice)*qValue;
        
            addedProducts[index].ProductPrice = prodPriceFin;
            localStorage.setItem("Cart Products", JSON.stringify(addedProducts));

            addedProducts[index].ProdQuantity = qValue;
            localStorage.setItem("Cart Products", JSON.stringify(addedProducts));
            
            parentQDiv.children[2].textContent = prodPriceFin.toString();
            
            productsID[index] = qValueId;
            localStorage.setItem("Product ID", JSON.stringify(productsID));

            let total = 0;
    
            for(let i in addedProducts)
            {
                let parsePrice = parseInt(addedProducts[i].ProductPrice);
                localStorage.setItem("Price Total", total+=parsePrice);
            }
            
            document.getElementById("totalPriceSpan").textContent = "Total: "+total;
        }
    }

    for(let i=0; i<prodQuantity.length; i++)
    {
        prodQuantity[i].addEventListener("change", prodQuantityF);
    }

    let total = 0;
    
    for(let i in addedProducts)
    {
        let parsePrice = parseInt(addedProducts[i].ProductPrice);
        localStorage.setItem("Price Total", total+=parsePrice);
    }

    if(productPriceTotal===0 || productPriceTotal === "0")
    {
        let productPriceTotal = 0;
        localStorage.setItem("Price Total", productPriceTotal)
        document.getElementById("totalPriceSpan").textContent = "Total: "+productPriceTotal;
    }
}


