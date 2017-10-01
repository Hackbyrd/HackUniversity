// Closes the sidebar menu
$('#menu-close').click(function(e) {
  e.preventDefault();
  $('#sidebar-wrapper').toggleClass('active');
});

// Opens the sidebar menu
$('#menu-toggle').click(function(e) {
  e.preventDefault();
  $('#sidebar-wrapper').toggleClass('active');
});

$(function() {

  // Scrolls to the selected menu item on the page
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }); // end scroll

  // submit new signup
  $(document).on('click', '#sign-up-btn', function () {

    // var url = document.location.protocol + '//' + document.location.host + '/users';
    var data = {
      user: {
        'name': $('#name').val(),
        'email': $('#email').val(),
        'password': '&27x#d%xa54b@rUDE4KH34jz',
        'school': $('#school').val(),
        'gender': $('#gender').val(),
        'age': $('#age').val()
      }
    };

    $.ajax({
      url: '/users',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(res) {
        console.log(res);
      }
    });

  }); // end new signup

  // change(0);

});

// change background computer image
// function change(num) {
//   console.log(num);
//   var url = $('.header').css('background-image');
//   url = url.substring(0, $('.header').css('background-image').indexOf('-') + 1) + num.toString() + '.svg)';
//   $('.header').css('background-image', url);

//   if (num == 10)
//     num = -1;
//   num++;

//   setTimeout(function() {
//     change(num);
//   }, 1000); // check again in a second
// }
