$(document).ready(function() {

  $(".words").on('keyup', function(e) {
    e.preventDefault();
    if (e.keyCode !== 13) return;
    var value = this.value.trim();
    var phrase = value.match(/\w+$/)[0];

    $.get('/words/' + phrase, function(data) {
      $('#suggest').empty();
      data.forEach(function(word) {
        $('#suggest').append(`<p class="suggestion"> ${word.word} </p>`);
      });
    });

  });

  $('#suggest').on('click', '.suggestion', function() {

    var input = document.querySelector('#search textarea');
    var value = input.value.trim();
    input.value = value.replace(/\w+$/, this.innerText + ' ');
    $('#search textarea').focus();
    
  });

});
