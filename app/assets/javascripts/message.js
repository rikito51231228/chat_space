$(function(){

  function buildMessage(message) {
    if (message.image) {
      let html = `<div class="message-box">
                    <div class="message-info">
                      <div class="message-info__upper">
                        <div class="message-info__upper__name">
                          ${message.user_name}
                        </div>
                        <div class="message-info__upper__date">
                          ${message.created_at}
                        </div>
                      </div>
                      <div class="message-info__message">
                        <p class="Message__text">
                          ${message.text}
                        </p>
                        <img class="Message__image" src="${message.image}">
                      </div>
                    </div>
                  </div>`
      return html;
    } else {
      let html = `<div class="message-box">
                  <div class="message-info">
                    <div class="message-info__upper">
                      <div class="message-info__upper__name">
                        ${message.user_name}
                      </div>
                      <div class="message-info__upper__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="message-info__message">
                      <p class="Message__text">
                        ${message.text}
                      </p>
                    </div>
                  </div>
                </div>`
      return html;
    };
  }
    
    
  $(".form-box").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message) {
      let html = buildMessage(message)
      $('.message-list').append(html)
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      $('.form-box')[0].reset();
      $('.submit-box').prop("disabled", false);
    })
  });
});