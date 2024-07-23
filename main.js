
let nav=document.querySelector(".navbar");
let cartItems=document.querySelector(".cart-items-container");
let serchForm=document.querySelector(".search-form");
document.getElementById("menu-btn").onclick=()=>{
    document.getElementById("menu-btn").classList.toggle("bx-x");
    nav.classList.toggle("active");
    cartItems.classList.remove("active");
    serchForm.classList.remove("active");
}
document.getElementById("bag-btn").onclick=()=>{
    cartItems.classList.toggle("active");
    nav.classList.remove("active");
    serchForm.classList.remove("active");
    document.getElementById("menu-btn").classList.remove("bx-x");

}
document.getElementById("search-btn").onclick=()=>{
    serchForm.classList.toggle("active");
    nav.classList.remove("active");
    cartItems.classList.remove("active");
    document.getElementById("menu-btn").classList.remove("bx-x");

}
window.onscroll = ()=>{
    nav.classList.remove("active");
    cartItems.classList.remove("active");
    serchForm.classList.remove("active");
    document.getElementById("menu-btn").classList.remove("bx-x");


}