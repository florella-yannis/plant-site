/*=============== SHOW MENU ===============*/
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("nav-links");

// Gérer l'ouverture/fermeture du menu
menuIcon.addEventListener('click', function () {
  navLinks.classList.toggle('mobile-menu');

  // Changer l'icône selon la classe mobile-menu
  if (navLinks.classList.contains('mobile-menu')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

// Fermer le menu lorsque l'on clique sur un lien
const menuLinks = navLinks.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.classList.remove('mobile-menu');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  });
});

/*=============== QUESTIONS ACCORDION ===============*/
const acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}