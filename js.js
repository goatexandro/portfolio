document.addEventListener('DOMContentLoaded', function(event) {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    // Cargar el modo guardado en localStorage
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(savedTheme);

    // Cambiar el modo al hacer clic en el botón
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Evento click en el icono de menú hamburguesa
    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active'); // Toggle de la clase 'active' en el menú
    });

    // Cerrar el menú al hacer clic en cualquier enlace del menú
    const links = menu.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            menu.classList.remove('active');
        });
    }

    // Cerrar el menú al hacer clic fuera del menú hamburguesa
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideHamburguesa = menuHamburguesa.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideHamburguesa) {
            menu.classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)'; // Escala la tarjeta al 105%
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Añade una sombra suave
            this.style.transition = 'transform 0.3s, box-shadow 0.3s'; // Agrega transición suave
        });

        cards[i].addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; // Vuelve a escala normal
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Quita la sombra o restaura la original
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el envío automático del formulario

        if (!validateName()) {
            alert('Por favor, ingresa tu nombre');
            return;
        }
        if (!validateEmail()) {
            alert('El correo electrónico no es válido');
            return;
        }
        if (!validateMessage()) {
            alert('Por favor, ingresa tu mensaje');
            return;
        }

        // Si todas las validaciones pasan, se envía el formulario
        form.submit();
    });

    function validateName() {
        const nameValue = nameInput.value.trim();
        return nameValue!== '';
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(emailValue);
    }

    function validateMessage() {
        const messageValue = messageInput.value.trim();
        return messageValue!== '';
    }
});