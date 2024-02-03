document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.header_middle__bar')
    .addEventListener('click', function () {
      var myElement = document.querySelector('.header_bottom');
      var clear = document.querySelector('.clear');
      myElement.classList.toggle('header_bottom__hidden');
      clear.classList.toggle('clear__subnav');
    });

  document.addEventListener('click', function (event) {
    var clickedElement = event.target;
    console.log(!clickedElement.closest('.header_bottom'));
    console.log(clickedElement.classList.contains('header_bottom__hidden'));
    // Kiểm tra nếu phần tử được click không phải là .header_middle__bar
    if (
      !clickedElement.closest('.header_bottom') &&
      !clickedElement.closest('.header_middle__bar')
    ) {
      var myElement = document.querySelector('.header_bottom');
      var clear = document.querySelector('.clear');
      myElement.classList.remove('header_bottom__hidden');
      clear.classList.remove('clear__subnav');
    }
  });
});
