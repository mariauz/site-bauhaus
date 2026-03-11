// Menu Mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    // Aqui você pode adicionar uma classe para animar o hambúrguer
});

// Animação de Scroll (Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Executar uma vez ao carregar para mostrar elementos do topo
window.onload = reveal;

// Simulação de envio de formulário
const form = document.getElementById("form-contato");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso! A Bauhaus Arquitetura entrará em contato em breve.");
        form.reset();
    });
}
