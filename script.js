const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

let noCount = 0;

const messages = [
    "Sure kana ba jan?",
    "libreha nako ba!",
    "hilak nalang ko oiii😭",
    "jo, wag mo naman akong bitawan",
    "ok.",
    "mag yes nayan",
    "yes mona",
    "PLEASE"
];

const popupMessages = [
    "SUKO KO RON",
    "YES MONA KASI",
    "OK WAG NALANG",
    "MAG YES NAYAN",
    "BUOTAN MANA JOHNALOG OIII"
];

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

    message.textContent = "WALA NA NI SUGOT NAKA";

    setTimeout(() => {

        message.textContent =
            "WALA NA NI SUGOT NAKA.";

        yesBtn.textContent = "AASAHAN KOYAN AHHHHHHH👻";

    }, 1200);
});


/* NO BUTTON */

function moveButton() {

    noCount++;

    message.textContent =
        messages[Math.floor(Math.random() * messages.length)];

    /*
       Instead of instantly teleporting,
       smoothly move the button.
    */

    if (noCount >= 2) {

        const maxX = window.innerWidth - noBtn.offsetWidth - 30;
        const maxY = window.innerHeight - noBtn.offsetHeight - 30;

        const x = Math.max(20, Math.random() * maxX);
        const y = Math.max(20, Math.random() * maxY);

        noBtn.style.position = "fixed";

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }

    if (noCount >= 5) {
        showPopup();
    }
}


/* COMPUTER */

noBtn.addEventListener("mouseenter", () => {
    moveButton();
});


/* PHONE / TOUCH */

noBtn.addEventListener("touchstart", (event) => {

    event.preventDefault();

    moveButton();
});


/* POPUP */

function showPopup() {

    popupText.textContent =
        popupMessages[
            Math.floor(Math.random() * popupMessages.length)
        ];

    popup.style.display = "flex";
}


closePopup.addEventListener("click", () => {

    popup.style.display = "none";

    message.textContent =
        "YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSS";
});


/* FLOATING HEARTS */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        12 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        4 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);