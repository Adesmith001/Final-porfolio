$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

  function toggleMenu() {
    const menu = document.querySelector('.lefta');
    const icon = document.querySelector('.menu-icon');
  
    menu.classList.toggle('active');
    icon.classList.toggle('active');
  }
  
  const goToTopBtn = document.getElementById("goToTopBtn");
  
  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
  };
  
  goToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  });