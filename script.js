//your code here

const mainApple = document.getElementById("main-apple");
const colorOptions = document.querySelectorAll(".color-option");

colorOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const image = option.querySelector("img");

        mainApple.src = image.src;
        mainApple.alt = image.alt + " delicious apple";

        colorOptions.forEach((button) => {
            button.classList.remove("selected");
        });

        option.classList.add("selected");
    });
});
