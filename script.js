const stars = 250;

for (let i = 0; i < stars; i++) {
    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration =
        (Math.random() * 3 + 1) + "s";

    document.body.appendChild(star);
}