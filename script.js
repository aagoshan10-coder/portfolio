let scrollAmount = 0;

function slideRight() {
    const container = document.getElementById("categoryCarousel");
    scrollAmount += 300;
    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}

function slideLeft() {
    const container = document.getElementById("categoryCarousel");
    scrollAmount -= 300;
    if (scrollAmount < 0) scrollAmount = 0;

    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}
