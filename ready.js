$(document).ready(function() {
  // La magia aquí!

  // Sample-1
  $('.convert-sample-1').on('click', function(e) {
    e.preventDefault();
    $('.u2s-fake-select.sample-1').ul2select({
      custom_events: {
        'change': function(){
          console.log($(this).find('option:selected').text());
          // Tipical navigate to section on changing select option ;)
          // document.location.href = $(this).find('option:selected').val();
        }
      }
    });
  });

  // Sample-2
  $('.convert-sample-2').on('click', function(e) {
    e.preventDefault();
    $('.u2s-fake-select.sample-2').ul2select({
      active_class: 'selected',
      select_wrapper: '<div id="my-custom-wrapper">'
    });
  });

  // Sample-3
  $('.convert-sample-3').on('click', function(e) {
    e.preventDefault();
    $('.u2s-fake-select.sample-3').ul2select({
      select_wrapper: null
    });
  });

  // Restore all ULs
  $('.restore-samples').on('click', function(e) {
    e.preventDefault();
    $('.u2s-fake-select').ul2select('revert');
  });

});

$(document)
  .on('enter.mobile.mqbe', function() {
    console.log('eo');
    $('.convert-on-mobile').ul2select();
  })

  .on('leave.mobile.mqbe', function() {
    $('.convert-on-mobile').ul2select('revert');
  });
