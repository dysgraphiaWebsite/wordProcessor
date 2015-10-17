$(document).ready(function() {
  $("#search").submit(function(e) {
    e.preventDefault();
    $.get('/words/'+this.searchInput.value, function(data) {
      console.log(data);
    });
  });
});
