// Seleccionar el botón de menú hamburguesa y el contenedor del menú
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
// Seleccionar todos los enlaces dentro del menú
const navLinksItems = document.querySelectorAll('.nav-links a');

// Añadir un listener de evento al clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' en el contenedor del menú
    navLinks.classList.toggle('active');

    // Alternar la clase 'active' en el botón hamburguesa para animar las barras
    menuToggle.classList.toggle('active');
});

// Añadir un event listener a cada enlace del menú
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        // Cerrar el menú si está abierto
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Función para cerrar el menú
function closeMenu() {
  navLinks.classList.remove('active');
  menuToggle.classList.remove('active');
}

// Añadir un event listener al documento para cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
  // Comprobar si el clic fue dentro del menú o en el botón de hamburguesa
  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  // Si el clic no fue en ninguno de esos elementos, cerrar el menú
  if (!isClickInsideMenu && !isClickOnToggle) {
    closeMenu();
  }
});