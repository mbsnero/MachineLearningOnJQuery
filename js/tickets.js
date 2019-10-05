$(document).ready( function(){
  $('.confirm-btn').on('click', function() {
    let data = [];
    let length = 3;
    let el, template;
    const fpRoute = "url('../img/Funny\ Island\ Ticket\ FP-2x.png')";
    const notfpRoute = "url('../img/Funny\ Island\ Ticket-2x.png')";

    for (let i = 0; i < length; i++) {
      data[i] = {
        name: $('#t' + (i + 1)).val(),
        isFp: $('#c' + (i + 1)).is(':checked')
      }
    }

    for (let i = 0; i < length; i++) {
      el = data[i];
      template = `<div id="render${i + 1}" class="render-item">
        <p>${el.name}</p>
      </div>`;
      $('.render-block').append(template);
      if (el.isFp) {
        $('#render' + (i + 1)).css('background-image', fpRoute);
      } else {
        $('#render' + (i + 1)).css('background-image', notfpRoute);
      }
    }
    
  })
});