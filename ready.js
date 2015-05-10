$(document).ready(function() {
  // La magia aquí!

  // Sample-1
  $('.convert-sample-1').on('click', function(e) {
    e.preventDefault();
    $('.u2s-fake-select.sample-1').ul2select({
      custom_events: {
        'change': function(){
          console.log($(this).find('option:selected').text())
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

  // Restore ULs
  $('.restore-samples').on('click', function(e) {
    e.preventDefault();
    $('.u2s-fake-select').ul2select('revert');
  });

});
