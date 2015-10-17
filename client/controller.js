$(document).ready(function() {

  $("#search").submit(function(e) {
    e.preventDefault();
    var value = this.searchInput.value;
    var phrase = value.match(/\w+$/)[0];

    $.get('/words/' + phrase, function(data) {
      $('#suggest').empty();
      data.forEach(function(word) {
        $('#suggest').append(`<p class="suggestion"> ${word.word} </p>`);
      });
    });

  });

  $('#suggest').on('click', '.suggestion', function() {

    var input = document.querySelector('#search input');
    var value = input.value;
    input.value = value.replace(/\w+$/, this.innerText + ' ');
    $('#search input[type=text]').focus();
    
  });

});
