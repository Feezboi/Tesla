/* =====================================
PAGE NAVIGATION
===================================== */

function showPage(page) {

const pages = document.querySelectorAll(".page");

pages.forEach(function(item) {

item.classList.remove("active-page");

});


if (page === "home") {

document
.getElementById("homePage")
.classList.add("active-page");

window.scrollTo(0, 0);

}


if (page === "vehicles") {

document
.getElementById("vehiclesPage")
.classList.add("active-page");

window.scrollTo(0, 0);

}


if (page === "stock") {

document
.getElementById("stockPage")
.classList.add("active-page");

window.scrollTo(0, 0);

}


if (page === "energy") {

document
.getElementById("energyPage")
.classList.add("active-page");

window.scrollTo(0, 0);

}


if (page === "about") {

document
.getElementById("aboutPage")
.classList.add("active-page");

window.scrollTo(0, 0);

}

}


/* =====================================
HOME
===================================== */

function goHome() {

showPage("home");

}


/* =====================================
MOBILE MENU
===================================== */

function openMenu() {

document
.getElementById("sideMenu")
.classList
.add("active");

}


function closeMenu() {

document
.getElementById("sideMenu")
.classList
.remove("active");

}


/* =====================================
VEHICLE DETAILS
===================================== */

function showVehicle(vehicle) {

showPage("vehicleDetail");


const name =
document.getElementById("vehicleName");

const type =
document.getElementById("vehicleType");

const tagline =
document.getElementById("vehicleTagline");

const description =
document.getElementById("vehicleDescription");

const range =
document.getElementById("rangeValue");

const speed =
document.getElementById("speedValue");

const power =
document.getElementById("powerValue");

const hero =
document.querySelector(".detail-hero");


if (vehicle === "s") {

name.textContent = "Voltura S";

type.textContent = "PERFORMANCE SEDAN";

tagline.textContent =
"Performance without compromise.";

description.textContent =
"The Voltura S is a fictional electric sedan " +
"focused on clean design, responsive performance " +
"and everyday usability.";

range.textContent = "400+";

speed.textContent = "3.9s";

power.textContent = "AWD";

hero.style.backgroundImage =
"linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.65)),url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=2000&q=80')";

}


if (vehicle === "x") {

name.textContent = "Voltura X";

type.textContent = "ELECTRIC SUV";

tagline.textContent =
"Space meets electric performance.";

description.textContent =
"The Voltura X is a fictional electric SUV " +
"designed around spaciousness, comfort and " +
"advanced electric technology.";

range.textContent = "430+";

speed.textContent = "4.5s";

power.textContent = "AWD";

hero.style.backgroundImage =
"linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.65)),url('https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=80')";

}


if (vehicle === "r") {

name.textContent = "Voltura R";

type.textContent = "PERFORMANCE COUPE";

tagline.textContent =
"Built for the thrill.";

description.textContent =
"The Voltura R is a fictional performance " +
"electric coupe focused on acceleration, " +
"handling and an aggressive driving experience.";

range.textContent = "350+";

speed.textContent = "2.9s";

power.textContent = "AWD";

hero.style.backgroundImage =
"linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.65)),url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2000&q=80')";

}

}


/* =====================================
PURCHASE MODAL
===================================== */

function openPurchase() {

document
.getElementById("purchaseModal")
.classList
.add("active");

}


function closePurchase() {

document
.getElementById("purchaseModal")
.classList
.remove("active");

}


/* =====================================
PAYMENT OPTIONS
===================================== */

function selectPayment(method) {

const bitcoin =
document.getElementById("bitcoinPayment");

const wire =
document.getElementById("wirePayment");


bitcoin.classList.remove("active");

wire.classList.remove("active");


if (method === "bitcoin") {

bitcoin.classList.add("active");

}


if (method === "wire") {

wire.classList.add("active");

}

}


/* =====================================
CHECKOUT
===================================== */

function continueCheckout() {

const bitcoin =
document
.getElementById("bitcoinPayment")
.classList
.contains("active");


const wire =
document
.getElementById("wirePayment")
.classList
.contains("active");


if (!bitcoin && !wire) {

alert(
"Please select a payment method."
);

return;

}


if (bitcoin) {

alert(
"Bitcoin selected.\n\n" +
"This is a demonstration checkout. " +
"No cryptocurrency payment is processed."
);

return;

}


if (wire) {

alert(
"Wire Transfer selected.\n\n" +
"This is a demonstration checkout. " +
"No bank transfer is initiated."
);

}

}


/* =====================================
ENERGY BUTTONS
===================================== */

function showMessage(message) {

alert(message);

}


/* =====================================
CLOSE MODAL WHEN CLICKING OUTSIDE
===================================== */

document
.getElementById("purchaseModal")
.addEventListener("click", function(event) {

if (event.target === this) {

closePurchase();

}

});


/* =====================================
ESCAPE KEY
===================================== */

document.addEventListener(
"keydown",
function(event) {

if (event.key === "Escape") {

closePurchase();

closeMenu();

}

}
);



