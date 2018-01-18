$(document).ready(function() {
  var elements = ["header","paragraph","image"]
  elements.forEach(function(element) {
    $("." + element).click(function(event) {
      alert("This is a " + element);
      event.preventDefault();
    });
  //
  //
  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
  });
});
