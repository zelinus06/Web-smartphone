function jump(){
    location.href = "./searchResult.html";
}
function jumpToCart(){
    location.href = "./shopcart.html";
}
function jump1() {
    location.href = "./Shop.html";
}
function searchByName() {
    const result = document.getElementById('search').value;
    var resultName = document.querySelectorAll(".name");
    resultName.forEach(function callback(currentValue, e, resultName) {
        var item = currentValue.innerText;
        if (item == result) {
            var resultItem = currentValue.parentElement;
            var resultProduct = resultItem.parentElement;
            var productImg = resultProduct.querySelector("img").src
            var productName = resultProduct.querySelector(".name").innerText
            var productPrice = resultProduct.querySelector(".price").innerText
            var productObject = new Object();
            productObject.name = productName;
            productObject.price = productPrice;
            productObject.img = productImg;
            sessionStorage.setItem("resultProduct", JSON.stringify(productObject));
            console.log(sessionStorage.length);
            i = -1;
            while (i < sessionStorage.length) {
                sessionStorage.clear();
                sessionStorage.setItem(i, JSON.stringify(productObject));
                break;
            }
            jump();
        }
        // else {
        //     alert("Không tìm thấy sản phẩm bạn muốn\nVui lòng điền đúng tên sản phẩm");
        //     jump1();
        // }
    })
}
