    var ob = sessionStorage.getItem(-1)
    console.log(ob)
    var ob1 = JSON.parse(ob)
    var a = ob1.img
    var b = ob1.name
    var c = ob1.price
    var addDiv = document.createElement('div');
    var divContent = '<div class="item"><a href="" class="product"><img src="'+a+'" alt="" class="change-size-phone-img"><p class="name">'+b+'</p><p class="price">'+c+'</p></a><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="jumpToCart()">Xem Ngay</button></div>';
    addDiv.innerHTML = divContent;
    var cartTable = document.querySelector('.here')
    cartTable.append(addDiv)