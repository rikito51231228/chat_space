$(function(){

  function addUser(user){
    let html = `<div id="UserSearchResult">
                  <div class="SettingGroupForm__rightField">
                    <div class="ChatMembers">${user.name}</div>
                  </div>
                </div>`
    $("#UserSearchResult").append(html)
  }

  function addNoUser() {
    let html = `<div id="UserSearchResult">
                  <div class="SettingGroupForm__rightField">
                    <div class="ChatMembers">ユーザーが見つかりません</div>
                  </div>
                </div>`
  $("#UserSearchResult").append(html)
  }

  $('#UserSearch__field').on("keyup", function(e){
    e.preventDefault();
    let input = $('#UserSearch__field').val();
    $.ajax({
      type: "GET",
      dataType: 'json',
      data: {keyword: input},
      url: "/users"
    })
    .done(function(users) {
      $("#UserSearchResult").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          addUser(user);
        });
      }
      else {
        addNoUser();
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });

  $('.')
});