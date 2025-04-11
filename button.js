document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".main-content section");

    // Função para mostrar a seção correspondente
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? "block" : "none";
        });
    }

    // Adiciona evento de clique aos links
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // Mostra apenas a seção "home" ao carregar a página
    showSection("home");
});