const hamburguesa = document.getElementById("hamburguesa");
const navMovil = document.getElementById("navMovil");

hamburguesa.addEventListener("click", () => {
    navMovil.classList.toggle("nav-activo");
    hamburguesa.classList.toggle("open");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        navMovil.classList.remove("nav-activo");
        hamburguesa.classList.remove("open");

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});