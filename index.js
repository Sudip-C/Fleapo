
const parallaxSection = document.getElementById('parallax-section');

window.addEventListener('scroll', function() {
  let offset = window.scrollY;
  parallaxSection.style.backgroundPositionY = offset * 1.5 + 'px'; // Adjust the multiplier for desired effect
});

  

  document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.button_div');
  
    scrollButton.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('data-scroll-to');
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.button_image');
  
    scrollButton.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('data-scroll-to');
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  const subscribe = ()=>{
   const subscribe_button= document.querySelector('.subscribe_button');
   subscribe_button.addEventListener('click',()=>{
        alert("Thank you for Subscibing Us.✌️✌️✌️")
   })
  }
  subscribe()

//   function shortenText(elementId, maxLength) {
//     const element = document.getElementById(elementId);
//     const text = element.textContent;
//     if (text.length > maxLength) {
//       element.textContent = text.substring(0, maxLength) + '...';
//     }
//   }
  
document.addEventListener('DOMContentLoaded', function() {
    const maxLength = 420;
    const fullText = document.getElementById('long-text').textContent;
    const shortText = fullText.substring(0, maxLength) + '...';
  
    // Initially set the text to the shortened version
    document.getElementById('long-text').textContent = shortText;
  
    document.getElementById('read_more').addEventListener('click', function() {
      const element = document.getElementById('long-text');
      const btn = document.getElementById('read_more');
  
      if (btn.textContent === 'Read more') {
        element.textContent = fullText;
        btn.textContent = 'Read less';
      } else {
        element.textContent = shortText;
        btn.textContent = 'Read more';
      }
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    function shortenText(element, maxLength) {
        const fullText = element.textContent;
        if (fullText.length > maxLength) {
          element.setAttribute('data-full-text', fullText);
          element.textContent = fullText.substring(0, maxLength) + '...';
        }
      }
    
      const readMoreButtons = document.querySelectorAll('.read_more');
      readMoreButtons.forEach(button => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        shortenText(targetElement, 600); // Adjust maxLength as needed
    
        button.addEventListener('click', function() {
          if (targetElement.textContent.includes('...')) {
            targetElement.textContent = targetElement.getAttribute('data-full-text');
            button.textContent = 'Read less';
          } else {
            shortenText(targetElement, 600);
            button.textContent = 'Read more';
          }
        });
      });
  });
 
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll('.middle_part_blog').length;
  
  function showSlide(index) {
      const slides = document.querySelector('.slides');
  
      if (index >= totalSlides) {
          currentSlide = 0;
      } else if (index < 0) {
          currentSlide = totalSlides - 1;
      } else {
          currentSlide = index;
      }
  
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  function nextSlide() {
    showSlide(currentSlide + 1);
}
function prevSlide() {
    showSlide(currentSlide - 1);
}
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.pillow_slider');
    const slideWidth = document.querySelector('.card').clientWidth;
    
    let currentIndex = 0;
  
    function showSlide() {
        currentIndex++;
        slides.style.transition = 'transform 0.8s ease-in-out';
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    
        // Reset to the beginning when reaching the end
        if (currentIndex >= slides.children.length - 2) {
          setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = 0;
            slides.style.transform = `translateX(0)`;
          }, 500); 
        }
      }
  
  
      function startSlideInterval() {
        slideInterval = setInterval(showSlide, 1000);
      }
    
      startSlideInterval();
    
      slides.addEventListener('mouseenter', function() {
        clearInterval(slideInterval); 
      });
    
      slides.addEventListener('mouseleave', function() {
        startSlideInterval(); 
      });
  
  });
  

  // Assuming you have a specific scroll trigger point, like when the section comes into view
const picture_about = document.querySelector('.picture-about');
const about_text= document.querySelector('.container')
const image = picture_about.querySelector('img');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateImage() {
  if (isInViewport(picture_about)) {
    image.classList.add('animate-image'); // Add a CSS class to trigger animation
  } else {
    image.classList.remove('animate-image'); // Remove the CSS class if not in view
  }
}
function animateText() {
    if (isInViewport(about_text)) {
      about_text.classList.add('animate-text'); // Add a CSS class to trigger animation
    } else {
      about_text.classList.remove('animate-text'); // Remove the CSS class if not in view
    }
  }

// Listen for scroll events and animate image when in viewport
window.addEventListener('scroll', animateText);
window.addEventListener('scroll', animateImage);
