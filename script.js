// function jumpToSection(sectionId) {
//     const sectionElement = document.getElementById(sectionId);

//     if (sectionElement) {
//       sectionElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   }

function jumpToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      const marginTop = 20; // Adjust the margin top as needed
      const newPosition = sectionElement.offsetTop - marginTop;

      window.scrollTo({
        top: newPosition,
        behavior: 'smooth'
      });
    }
  }