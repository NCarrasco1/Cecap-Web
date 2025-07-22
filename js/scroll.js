    const sections = [
    { id: "header", element: document.querySelector(".headercont") },
    { id: "goals", element: document.querySelector("#goals") },
    { id: "service", element: document.querySelector(".service") },
    { id: "types", element: document.querySelector(".types") },
    { id: "us", element: document.querySelector("#us") },
    { id: "questions", element: document.querySelector("#questions") },
    { id: "footer", element: document.querySelector(".footer") },
    ];

    let currentSection = 0;
    let isAnimating = false;

    function handleWheel(event) {
    event.preventDefault();

    if (isAnimating) return; // Evitar spam

    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        // Siguiente sección
        currentSection++;
        goToSection(currentSection);
    } else if (event.deltaY < 0 && currentSection > 0) {
        // Sección anterior
        currentSection--;
        goToSection(currentSection);
    }
    }

    function goToSection(index) {
    isAnimating = true;
    const targetElement = sections[index].element;

    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    // Permitir siguiente scroll después de la animación
    setTimeout(() => {
        isAnimating = false;
    }, 800);
    }

    window.addEventListener("wheel", handleWheel, { passive: false });

    window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(62, 62, 69, 0.9)";
    } else {
        nav.style.background = "transparent";
    }
    });
