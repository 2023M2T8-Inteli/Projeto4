<div class="carousel-container">
      <div class="carousel-slide">
        <img src="images/imgipt1.png" alt="Imagem 1">
        <img src="images/imgipt2.png" alt="Imagem 2">
        <img src="images/imgipt1.png" alt="Imagem 3">
      </div>
      <button class="carousel-button prev">Anterior</button>
      <button class="carousel-button next">Próximo</button>
    </div>
    <script>
      const carouselContainer = document.querySelector('.carousel-container');
      const carouselSlide = document.querySelector('.carousel-slide');
      const prevButton = document.querySelector('.carousel-button.prev');
      const nextButton = document.querySelector('.carousel-button.next');
    
      let slidePosition = 0;
      const slides = carouselSlide.querySelectorAll('img');
      const totalSlides = slides.length;
    
      prevButton.addEventListener('click', () => {
        if (slidePosition === 0) {
          slidePosition = totalSlides - 1;
        } else {
          slidePosition--;
        }
        updateSlidePosition();
      });
    
      nextButton.addEventListener('click', () => {
        if (slidePosition === totalSlides - 1) {
          slidePosition = 0;
        } else {
          slidePosition++;
        }
        updateSlidePosition();
      });
    
      function updateSlidePosition() {
        carouselSlide.style.transform = `translateX(-${slidePosition * carouselContainer.offsetWidth}px)`;
      }
    </script>  

    .carousel-container {
    width: 400px;
    height: 300px;
    overflow: hidden;
    position: relative;
  }

  .carousel-slide {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }

  .carousel-button.next {
    right: 10px;
  }

  .carousel-button.prev {
    left: 10px;
  }