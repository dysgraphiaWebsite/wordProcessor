$(document).ready(function() {
  $("#search").submit(function(e) {
    e.preventDefault();
    $.post('/searchWord', {value: this.searchInput.value}, function(data) {
      console.log(data);
    });
  });
});
