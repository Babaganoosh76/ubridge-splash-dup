$(document).ready(function(){
  $("nav a, .video-subtitle a").on('click', function(e) {
    e.preventDefault();
    scrollTo(this.hash);
  });
});

function scrollTo(hash) {
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 500, function(){
    // window.location.hash = hash;
  });
}
