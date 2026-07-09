document.addEventListener("DOMContentLoaded", () => {
    let burger = document.getElementById("menu-toggle")
    let menu = document.getElementById("menu");
    burger.addEventListener("click", function () {
        menu.classList.toggle("is-active");
    });

    let fontSize = sessionStorage.getItem("fontSize");
    if (fontSize == null) {
        fontSize = 16;
    } else {
        fontSize = parseInt(fontSize);
    }
    let contrast = sessionStorage.getItem("contrast");
    contrast = contrast != null && contrast === "true";

    let html = document.querySelector("html");
    let increaseSizeButton = document.getElementById("increase-size");
    let decreaseSizeButton = document.getElementById("decrease-size");
    let standardButton = document.getElementById("standard");
    let contrastButton = document.getElementById("contrast");

    let updateLayout = function() {
        if (fontSize > 20) {
            increaseSizeButton.style.display = 'none';
        } else {
            increaseSizeButton.style.display = '';
        }
        if (fontSize < 16) {
            decreaseSizeButton.style.display = 'none';
        } else {
            decreaseSizeButton.style.display = '';
        }
        if (contrast) {
            standardButton.style.display = '';
            contrastButton.style.display = 'none';
            html.classList.add("contrast");
        } else {
            standardButton.style.display = 'none';
            contrastButton.style.display = '';
            html.classList.remove("contrast");
        }

        html.style.fontSize = fontSize + "px";
        sessionStorage.setItem("fontSize", fontSize);
        sessionStorage.setItem("contrast", contrast);
    }

    updateLayout();
    increaseSizeButton.addEventListener("click", function() {
        fontSize += 4;
        updateLayout();
        return false;
    });
    decreaseSizeButton.addEventListener("click", function() {
        fontSize -= 4;
        updateLayout();
        return false;
    });
    standardButton.addEventListener("click", function() {
        contrast = false;
        updateLayout();
        return false;
    });
    contrastButton.addEventListener("click", function() {
        contrast = true;
        updateLayout();
        return false;
    });

});