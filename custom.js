var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});

function showAnswer(id) {
  $(id).addClass('global-modal-show');
}

function hideAnswer() {
  $('.global-modal').removeClass('global-modal-show');
}


$( ".icon" ).on( "click", function (e) {
    e.preventDefault();
    showAnswer(this.dataset.answer);
});

$( ".overlay" ).on( "click", hideAnswer);
$( ".global-modal_close" ).on( "click", hideAnswer);
$(".mobile-close").on("click", hideAnswer);
