
const btn = document.querySelectorAll(".btn-primary");
// var productName = document.querySelector(".name");
// console.log(productName);
    btn.forEach(function (button, index) {
        button.addEventListener("click", function(event){{
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector(".name").innerText
            var productPrice = product.querySelector(".price").innerText
            var productObject = new Object();
            productObject.name = productName;
            productObject.price = productPrice;
            productObject.img = productImg;
            i = -1;
            while (i < localStorage.length) {
                localStorage.setItem(localStorage.length, JSON.stringify(productObject));
                break;
            }
        }})
    })
  
    function waiting() {
        alert("Tính năng đang phát triển");
    }