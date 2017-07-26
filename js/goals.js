$(document).ready(function() {
    var open = $('.open-nav'),
        overlay = $('.overlay'),
        close = $('.close');

    open.click(function() {
        overlay.show();
        $('#wrapper').addClass('toggled');
    });

    overlay.click(function() {
      overlay.hide();
      $('#wrapper').removeClass('toggled');
    })
});

$(document).ready(function() {
    $('input[name="speedingGoal"]').change(function() {
      var value = document.querySelector('input[name="speedingGoal"]:checked').value;
      if (value === "easy") {
        document.querySelector('.speedingFace').style.color = 'yellow';
        document.querySelector('.speedingFire').style.color = 'yellow';
      }
      else if (value === "medium") {
        document.querySelector('.speedingFace').style.color = 'orange';
        document.querySelector('.speedingFire').style.color = 'orange';
      }
      else if (value === "hard") {
        document.querySelector('.speedingFace').style.color = 'red';
        document.querySelector('.speedingFire').style.color = 'red';
      }
    });
});

$(document).ready(function() {
    $('input[name="smoothnessGoal"]').change(function() {
      var value = document.querySelector('input[name="smoothnessGoal"]:checked').value;
      if (value === "easy") {
        document.querySelector('.smoothnessFace').style.color = 'yellow';
        document.querySelector('.smoothnessFire').style.color = 'yellow';
      }
      else if (value === "medium") {
        document.querySelector('.smoothnessFace').style.color = 'orange';
        document.querySelector('.smoothnessFire').style.color = 'orange';
      }
      else if (value === "hard") {
        document.querySelector('.smoothnessFace').style.color = 'red';
        document.querySelector('.smoothnessFire').style.color = 'red';
      }
    });
});
