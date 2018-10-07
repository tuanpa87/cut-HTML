$( document ).ready(function() {
  
   //Hung code here
   $('.new-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true,
    // centerPadding: '60px',
    dots: false,
    arrows: false
    // variableWidth: true
  });

  $('.gallery-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '60px',
    dots: false,
    arrows: false
    // variableWidth: true
  });


  var acc = document.getElementsByClassName('accordion');
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle('active');

        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }
}
  
          


  //Tuan code here

  var clockDiv = $('.clock')
  var timeRemain = (new Date(clockDiv.data('date')) - new Date()) / 1000;
  //console.log(timeRemain);

  var clock = clockDiv.FlipClock(timeRemain, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: false
  });

});



