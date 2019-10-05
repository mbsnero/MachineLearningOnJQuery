$(document).ready( function(){
  
  let data = [false, false, false, false];

  let index;
  let selector;
  let content = `<p class="news-item-text rendered">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid minima,
  veritatis temporibus inventore nobis asperiores aspernatur quam, sint quo voluptatum vel vero repellat
  totam maxime deserunt, nam a ipsa sequi!</p>`;
  
  $(".news-item-btn").on('click', function(event) {
    index = Number(event.target.id.substr(3));
    if (!data[index - 1]) {
      selector = `#item${index} .news-item-text`;
      $(selector).after(content);
      console.log(selector, content, event.target.id)
      $('#' + event.target.id).html('Close');
      data[index - 1] = true;
    } else {
      $('.rendered').eq(index - 1).remove();
      $('#' + event.target.id).html('Read More');
      data[index - 1] = false;
    }
  })

});