window.addEventListener('scroll', () => {
    const navbar = document.getElementById('home-nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= 1) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  