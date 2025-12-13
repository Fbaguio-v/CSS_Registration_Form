document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");

    button.addEventListener("click", (e) => {
        e.target.textContent = "You clicked a button";
    });
});