const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("primary-navigation");
const navigationLinks = navigation.querySelectorAll("a");

function closeMenu() {
    navigation.classList.remove("is-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
}

menuButton.addEventListener("click", function () {
    const menuIsOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    menuButton.setAttribute(
        "aria-label",
        menuIsOpen ? "Cerrar menú" : "Abrir menú"
    );
});

navigationLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
});