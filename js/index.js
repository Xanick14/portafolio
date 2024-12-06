document.addEventListener('DOMContentLoaded', () => {
    const divsProyectos = document.querySelectorAll('.proyecto')

    divsProyectos.forEach(div => {
        div.addEventListener('mouseover', () => div.classList.add('active'));

        div.addEventListener('mouseout', () => div.classList.remove('active'));
    });







    const header = document.querySelector(".header");
    const sections = document.querySelectorAll("section");
    const tagImagen = document.querySelector('#logo-page');



    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("oscura")) {
                        tagImagen.src = "public/logos/logo-oscuro.svg"
                        header.classList.add("oscura");
                        header.classList.remove("clara");
                    } else {
                        tagImagen.src = "public/logos/logo-claro.svg"
                        header.classList.add("clara");
                        header.classList.remove("oscura");
                    }
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));



    let lastScrollY = window.scrollY;
    let isScrolling;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }

        lastScrollY = window.scrollY;

        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            header.classList.remove("hidden");
        }, 200); 
    });
});
