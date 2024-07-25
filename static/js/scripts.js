//Codigo para CONTACTENOS
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');
    const exitoContainer = document.getElementById('exitoContainer');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(formulario);

        fetch('/contactenos', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                mostrarExito(data.mensaje);
            })
            .catch(error => {
                console.error('Error al enviar el formulario:', error);
            });
    });

    function mostrarExito(mensaje) {
        // Oculta el formulario
        formulario.style.display = 'none';

        // Muestra el mensaje de éxito
        exitoContainer.innerHTML = `<p>${mensaje}</p>
                                   <button onclick="mostrarFormulario()">Enviar otro formulario</button>`;
        exitoContainer.style.display = 'block';
    }

    //Recarga la pagina para enviar un nuevo formulario
    window.mostrarFormulario = function() {
        window.location.href = 'index.html#contactenos';
        window.location.reload();
    };
});

//Codigo para los POPOVERS
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});

// Código para cerrar todos los popovers al abrir uno nuevo
popoverTriggerList.forEach(function (popoverTriggerEl) {
    popoverTriggerEl.addEventListener('click', function () {
        const currentPopover = bootstrap.Popover.getInstance(popoverTriggerEl);

        popoverList.forEach(function (popover) {
            if (popover !== currentPopover) {
                popover.hide();
            }
        });
    });
});

//Codigo para que el NAVBAR (vista smartphone) SE CIERRE al seleccionar una seccion
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            document.getElementById('check').checked = false;
        });
    });
});

//Codigo para que la seccion de CONTACT US tenga TRANSICION
document.addEventListener("DOMContentLoaded", function() {
    var contactSection = document.querySelector(".contact-section");
    var isContactSectionVisible = false;

    function showContactSection() {
        if (!isContactSectionVisible) {
            contactSection.classList.add("show");
            isContactSectionVisible = true;
        }
    }

    function hideContactSection() {
        if (isContactSectionVisible) {
            contactSection.classList.remove("show");
            isContactSectionVisible = false;
        }
    }

    function handleScroll() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var contactSectionPosition = contactSection.getBoundingClientRect().top;

        if (contactSectionPosition < windowHeight * 0.75) {
            showContactSection();
        } else {
            hideContactSection();
        }
    }

    window.addEventListener("scroll", handleScroll);
});

//Codigo para que la seccion de NUESTROS SERVICIOS tenga TRANSICION
window.addEventListener('scroll', function() {
    var servicios = document.querySelectorAll('#nuestros-servicios .container.py-4');
    var triggerPoint = window.innerHeight * 0.8;

    servicios.forEach(function(servicio) {
        var position = servicio.getBoundingClientRect();

        if (position.top < triggerPoint) {
            servicio.classList.add('visible');
        } else {
            servicio.classList.remove('visible');
        }
    });
});

window.addEventListener('scroll', function() {
    var servicios = document.querySelectorAll('#nuestros-servicios .container.py-4');
    var triggerPoint = window.innerHeight * 0.8;
    var title = document.querySelector('.section-title');

    // Controla la visibilidad y la aplicación de la clase visible al título
    var titlePosition = title.getBoundingClientRect();
    if (titlePosition.top < triggerPoint) {
        title.classList.add('visible');
    } else {
        title.classList.remove('visible');
    }

    // Controla la visibilidad y la aplicación de la clase visible a los contenedores
    servicios.forEach(function(servicio) {
        var position = servicio.getBoundingClientRect();

        if (position.top < triggerPoint) {
            servicio.classList.add('visible');
        } else {
            servicio.classList.remove('visible');
        }
    });
});

//Inicio navbar
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');
    var inicioSection = document.getElementById('inicio');

    // Altura de la sección de inicio
    var inicioHeight = inicioSection.offsetHeight;

    // Función para cambiar la clase del navbar según el scroll
    function toggleNavbar() {
        if (window.scrollY > inicioHeight) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    }

    // Agregar evento de scroll para llamar a la función toggleNavbar
    window.addEventListener('scroll', toggleNavbar);
});


// Detectar cuando la sección de NUESTROS CLIENTES es visible en la ventana
window.addEventListener('scroll', function() {
    var section = document.querySelector('.fade-in-section'); // Selecciona la sección de clientes
    var position = section.getBoundingClientRect(); // Obtiene la posición de la sección en relación con la ventana

    // Si la parte superior de la sección está dentro del viewport
    if (position.top < window.innerHeight) {
        section.classList.add('show'); // Agrega la clase 'show' para mostrar la sección
    } else {
        section.classList.remove('show'); // Elimina la clase 'show' para ocultar la sección
    }
});