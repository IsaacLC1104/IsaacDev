/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('active');
  });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('active');
  });
});

/*=============== SCROLL HEADER ===============*/
function scrollHeader() {
  const header = document.querySelector('.header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav__link[href*=' + sectionId + ']');

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== QUALIFICATION TABS ===============*/
const tabs = document.querySelectorAll('.qualification__tab');
const contents = document.querySelectorAll('.qualification__content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');
    
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('qualification__tab--active'));
    contents.forEach(c => c.classList.remove('qualification__content--active'));
    
    // Add active class to clicked tab and corresponding content
    tab.classList.add('qualification__tab--active');
    document.querySelector(target).classList.add('qualification__content--active');
  });
});

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert and reset the form
    
    if (name && email && subject && message) {
      alert('¡Gracias por tu mensaje! Te contactaré pronto.');
      contactForm.reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
}

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
function revealOnScroll() {
  const reveals = document.querySelectorAll('.skill__item, .project__card, .qualification__data, .contact__card');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;
    
    if (elementTop < windowHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initial setup for reveal animation
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.skill__item, .project__card, .qualification__data, .contact__card');
  
  reveals.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `all 0.6s ease ${index * 0.1}s`;
  });
  
  revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

/*=============== TYPING EFFECT (Optional Enhancement) ===============*/
function typeEffect(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Uncomment to enable typing effect on page load
// window.addEventListener('load', () => {
//   const subtitle = document.querySelector('.home__subtitle');
//   if (subtitle) {
//     const originalText = subtitle.textContent;
//     typeEffect(subtitle, originalText, 80);
//   }
// });
