
// start jQuery of accordion section 
// idea when click on head slideToggle this head and hide others

$('.head-1').click(function () {
    $('.acc-detail-1').slideToggle(500)
    $('.acc-detail-2').hide(500)
    $('.acc-detail-3').hide(500)
    $('.acc-detail-4').hide(500)
    })

$('.head-2').click(function () {
    $('.acc-detail-2').slideToggle(500)
    $('.acc-detail-1').hide(500)
    $('.acc-detail-3').hide(500)
    $('.acc-detail-4').hide(500)

})
$('.head-3').click(function () {
    $('.acc-detail-3').slideToggle(500)
    $('.acc-detail-1').hide(500)
    $('.acc-detail-2').hide(500)
    $('.acc-detail-4').hide(500)
})
$('.head-4').click(function () {
    $('.acc-detail-4').slideToggle(500)
    $('.acc-detail-1').hide(500)
    $('.acc-detail-2').hide(500)
    $('.acc-detail-3').hide(500)
})

// end jQuery of accordion section 



// start jQuery of countdown section 
// idea is about jquary countdown ready give him date and decresing
  $(".clock")
  .countdown("2023/04/04", function(event) {
    $('#day').text(
      event.strftime('%D')
    );
    $('#Hour').text(
        event.strftime('%H')
      );
      $('#minute').text(
        event.strftime('%M')
      );
      $('#second').text(
        event.strftime('%S')
      );
  });
// end jQuery of countdown section

// start jQuery of Textarea Character Counter section 
// idea is about jquary when i press on any button on keyboard reduce from 100 letter the lenght of typing 
// and if function letter coming more than 100 letter give warning message 
$(function(){
  $('#text').keyup(function(event) {
    $('#count').text(100-$(this).val().length)
    let x=100-$(this).val().length
    if (x<0) {
      $('.error-message').show(0)
      $('#count-no').hide(0)
    } else {
      $('.error-message').hide(0)
      $('#count-no').show(0)
    }

  })
})

// end jQuery of Textarea Character Counter section 



