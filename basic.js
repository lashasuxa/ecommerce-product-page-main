var cart_function = document.getElementById("cart_function");
var cart_holder = document.getElementById("cart_holder");
var cart_displayed = false;

cart_function.addEventListener("click", cartDisplay);
function cartDisplay() {
  if (!cart_displayed) {
    cart_holder.style.display = "block";
    cart_displayed = true;
  } else {
    cart_holder.style.display = "none";
    cart_displayed = false;
  }
}

var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var quantity = document.getElementById("quantity");
var num = 0;
var cart_quantity = document.getElementById("cart_quantity");
var final_price = document.getElementById("final_price");
var add_to_cart_btn = document.getElementById("add_to_cart_btn");
var cart_main = document.getElementById("cart_main");
var cart_header = document.getElementById("cart_header");
var counter_num = document.getElementById("counter_num");
var counter_div = document.getElementById("counter_div");
minus.addEventListener("click", minusFunc);
function minusFunc() {
  num--;
  quantity.innerText = num;
  if (num <= 0) {
    num = 0;
    quantity.innerText = num;
    cart_header.style.display = "block";
    cart_main.style.display = "none";
    counter_div.style.display = "none";
  }
  cart_quantity.innerText = num;
  final_price.innerText = 125 * num;
  counter_num.innerText = num;
}
plus.addEventListener("click", plusFunc);
function plusFunc() {
  num++;
  quantity.innerText = num;
  cart_quantity.innerText = num;
  final_price.innerText = 125 * num;
}
add_to_cart_btn.onclick = () => {
  var quantity = document.getElementById("quantity").innerHTML;
  if (quantity > 0) {
    cart_header.style.display = "none";
    cart_main.style.display = "flex";
    counter_div.style.display = "block";
    counter_num.innerText = num;
  }
};
var delete_BTN = document.getElementById("delete_BTN");
delete_BTN.onclick = () => {
  cart_header.style.display = "block";
  cart_main.style.display = "none";
  counter_div.style.display = "none";
  num = 0;
  quantity.innerText = 0;
};
var burger_menu = document.getElementById("burger_menu");
var responsive_transparent = document.getElementById("responsive_transparent");
burger_menu.onclick = () => {
  responsive_transparent.style.display = "block";
};
var close_menu = document.getElementById("close_menu");
close_menu.onclick = () => {
  responsive_transparent.style.display = "none";
};
