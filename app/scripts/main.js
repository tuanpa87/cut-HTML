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



