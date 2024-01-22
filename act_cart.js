
  for (var i = 0; i < localStorage.length; i++) {
    var ob = localStorage.getItem(i)
    var ob1 = JSON.parse(ob)
    var a = ob1.img
    var b = ob1.name
    var c = ob1.price
    var addDiv = document.createElement('div');
    var divContent = '<div class="col shopCart"><img class="change-size-cart" src="'+a+'" alt=""><p class="name name-cart change-size-cart">'+b+'</p><p class="price name-cart">'+c+'</p><button onclick="waiting()" type="button" class=" btn btn-secondary button-cart" >Thông tin</button><input onclick="deleteCart()" class="check-box" type="checkbox"></input></div>';
    addDiv.innerHTML = divContent;
    var cartTable = document.querySelector('.row-cols-1')
    cartTable.append(addDiv)
  }

function deleteCart() {
  var chooseName = event.target
  var delProduct = chooseName.parentElement
  var delName = delProduct.querySelector(".name").innerText
  for (var i = 0; i < localStorage.length; i++) {
    var delOb = localStorage.getItem(i)
    var ob2 = JSON.parse(delOb)
    var b = ob2.name
    if (delName == b) {
      localStorage.removeItem(i)
    }
  }

var arrayDel = new Array();  
for (let i = 0; i <= localStorage.length; i++) {
  var ob3 = localStorage.getItem(localStorage.key(i));
  var ob4 = JSON.parse(ob3)
  if (ob4 == null) {
    break;
  }
    arrayDel.push(ob4);
    console.log(arrayDel);
  }
  localStorage.clear();
  var k = -1;
  var h = 0;
  arrayDel.forEach(function(currentValue) {
    while (k < localStorage.length) {
      localStorage.setItem(localStorage.length, JSON.stringify(currentValue));
      h++;
      break;
    }
  })
}
