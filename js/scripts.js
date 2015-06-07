$(function() {
  $("#ajax").click(function() {
    var city = $("#city").val();
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather",
      data: {
        q: city,
        units: "imperial"
      },
      success: function(data) {
        $("#response").append("<ul class='list-unstyled'>" +
                                "<li>City: " + data.name + "</li>" +
                                "<li>Temperature: " + data.main.temp + "</li>" +
                                "<li>Humidity: " + data.main.humidity + "</li>" +
                              "</ul>");
      }
    });
  });
});
