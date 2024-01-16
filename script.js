function jumpToSection(sectionId, clickedLink) {
    const sectionElement = document.getElementById(sectionId);
    const links = document.querySelectorAll('.tab');

    links.forEach(link => link.classList.remove('selected'));
    clickedLink.classList.add('selected');

    if (sectionElement) {
      const marginTop = 20; 
      const newPosition = sectionElement.offsetTop - marginTop;

      window.scrollTo({
        top: newPosition,
        behavior: 'smooth'
      });
    }
  }

  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.tab');

    sections.forEach((section, index) => {
      const top = section.offsetTop - 80;
      const bottom = top + section.clientHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        links.forEach(link => link.classList.remove('selected'));
        links[index].classList.add('selected');
      }
    });
  });


