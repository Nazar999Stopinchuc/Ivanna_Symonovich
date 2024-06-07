// $(function () {

// })
// ================================
// Portfolio tabs change function
(function () {
  const tabs = document.querySelectorAll('.portfolio__control-btn');
  const images = document.querySelectorAll('.portaolio-img');
  let imgPosition = 0;

  document.querySelector('.portfolio__control').addEventListener('click', e => {
    let actyveTab = e.target;
    let actyveTabData = actyveTab.dataset['i'];
    if (actyveTab.tagName !== 'LI') return false;

    tabs.forEach(elem => {
      elem.classList.remove('portfolio__control-btn--active');
    })
    actyveTab.classList.add('portfolio__control-btn--active');

    images.forEach(elem => {
      elem.style = `background-image: url(images/portfolio/${actyveTabData}${imgPosition}.png)`;
      imgPosition++
    });
    imgPosition = 0;
  });
})();
// ================================

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  autoplay: {
    delay: 4000,
  },
  spaceBetween: 50,
  loop: true,
  effect: 'cube',
  speed: 800
});
