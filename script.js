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



  window.addEventListener('scroll', function() {
    const s3 = document.querySelector('#section3');
    const textElement = document.querySelector('#con_text');
    const connectElement = document.querySelector('.contactdetails');

    if (s3 && textElement) {
      const top = s3.offsetTop - 400;

  
      if (window.scrollY >= top) {
      
        textElement.style.transition =  'padding-top .5s ease';
        textElement.style.paddingTop = '0px';
        connectElement.style.transition =  'padding-top .5s ease';
        connectElement.style.paddingTop = '0px';

      } else {
      
        textElement.style.transition =  'padding-top .5s ease';
        textElement.style.paddingTop = '400px';
        connectElement.style.transition =  'padding-top .5s ease';
        connectElement.style.paddingTop = '900px';
      }
    }
  });



//   document.addEventListener('DOMContentLoaded', function () {
//     const gallerySection = document.getElementById('#section2');
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 document.getElementById('.gallery').style.animationPlayState = 'running';
//             } else {
//                 document.getElementById('.gallery').style.animationPlayState = 'paused';
//             }
//         });
//     });

//     observer.observe(gallerySection);
// });

  
  