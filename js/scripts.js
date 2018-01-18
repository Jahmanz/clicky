






$(document).ready(function() {

  var flavors = []

  $("button.button").click(function() {
    var flavor = $("input#flavors").val();
    flavors.push(flavor);
    alert(flavors);
    $("ul").prepend("<li>" + flavor + "</li>");
    event.preventDefault();
  });
//
//   $("button#goodbye").click(function() {
//     $("ul").prepend("<li>Goodbye!</li>");
//   });
//
//   $("button#stop").click(function() {
//     $("ul").prepend("<li>Stop copying me!</li>");
//   });
});
