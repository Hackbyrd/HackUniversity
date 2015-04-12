function backdropResize() {
  $("#header").css("height", $(window).height());
  $("#header").css("width", $(window).width());
}

$(function() {

  backdropResize();

  $(window).resize(function () {
    backdropResize();
  });

  $(document).on("click", "#sign-up-btn", function () {

    var url = document.location.protocol + "//" + document.location.host + "/users";
    var data = { user: { "firstName": $("#firstName").val(), "lastName": $("#lastName").val(), "email": $("#email").val() } };

    $.ajax({
      url: url,
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(res) {
        console.log(res);
      }
    });

  });
});

function backdropResize() {
  $("#header").css("height", $(window).height());
  $("#header").css("width", $(window).width());
}
