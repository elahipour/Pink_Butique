
const products = document.querySelector("#products");
const productAd = document.querySelector(".product-ads");

const productor = () => {
    const product =
        `<div class=product>
    <div class=likes>۰</div>
    <img src=assets/Images/productsLayer.png id=bottom-right-layer >
    <img src=assets/Images/productsLayer2.png id=top-left-layer >
    <div id=product-qty>
    <div id=heart-like><img src=assets/Images/heart-like-1.svg></div>
    <div class=qty>
    <span class=purchase-num>۰</span>
    </div>
    <div class=number-btns>
    <img id=decrease src=assets/Images/minus2.png >
    <img id=increase src=assets/Images/plus2.png >
    </div>
    </div>
    </div>`;

    products.innerHTML += product;
}

String.prototype.toPersianDigits = function () {
    let id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return this.replace(/[0-9]/g, function (Word) {
        return id[+Word]
    });
}
for (let i = 1; i <= 8; i++) {
    productor();
}

let adsString = productAd.innerText;
productAd.querySelector("h1").innerText = adsString.toPersianDigits();


const product = document.querySelectorAll(".product");
for (let i of product) {
    let n = 0;
    i.addEventListener("click", (e) => {
        const parent = e.target.parentElement.parentElement;

        switch (e.target.id) {
            case 'increase':
                parent.childNodes[3].querySelector('span').innerHTML = (++n).toString().toPersianDigits();
                break;
            case 'decrease':
                parent.childNodes[3].querySelector('span').innerHTML = (n > 0 ? --n : n).toString().toPersianDigits();
                break;

            default:
                break;
        }
    })
}
const likes = document.querySelector("#likes");
const heartLike = document.querySelectorAll("#heart-like img");
for (let i of heartLike) {
    let l = 0;
    i.addEventListener("mouseenter", () => {
        i.setAttribute("src", "assets/Images/heart-like-2.svg")
    })
    i.addEventListener("click", () => {
        i.style.animation = 'clickedHeart 1s forwards';
        i.setAttribute("src", "assets/Images/heart-like-fly.svg");
        setTimeout(() => {
            i.setAttribute("src", "");
            i.parentElement.parentElement.parentElement.childNodes[1].innerHTML = `<span>${(l=1).toString().toPersianDigits()}</span>`;
        }, 1500);
    })
    i.addEventListener("mouseleave", () => {
        i.setAttribute("src", "assets/Images/heart-like-1.svg")
    })
}

function registerPage() {
    location.href = 'registration/register.html';
}

const humbergerBtn = document.querySelector(".humberger #humberger");
const humbergerMenu = document.querySelector("#humberger-menu");
const Hmenu = document.querySelector("#menu");
let tf = true;
humbergerBtn.addEventListener("click", () => {
    tf ? humbergerMenu.style.display = 'block' : humbergerMenu.style.display = 'none';
    tf = !tf;
})

window.addEventListener("resize", () => {
    humbergerMenu.style.display = 'none';
    tf = true;

})