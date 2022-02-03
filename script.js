const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeButton = document.getElementById('close');
const shoping_cart = document.getElementById('lg-bag');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    }

    )
};
if (closeButton) {
    closeButton.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
if (shoping_cart) {
    shoping_cart.addEventListener('mouseover', () => {

        alert(clicked);
    })
}