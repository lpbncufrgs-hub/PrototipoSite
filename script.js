document.addEventListener("DOMContentLoaded", () => {
    // Código anterior de destacar o link do menu...
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- Efeito Máquina de Escrever (Typewriter) ---
    const textElement = document.getElementById("typewriter-text");
    
    if (textElement) {
        const textToType = "Laboratório de Psicobiologia e Neurocomputação";
        const typingSpeed = 30; 
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                textElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
				document.querySelector('.subtitle').style.opacity = 1;
               
            }
        }

        // Inicia o efeito
        type();
    }
});