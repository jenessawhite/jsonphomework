function loadIt(){
var pageReq = $('#pageReq').val();
if (pageReq == '') {
  alert('Your search terms were not valid')
} else {
$.getJSON(
  "https://www.reddit.com/r/" + pageReq + ".json",
  function goGetIt(data)
  {
    var group = $('<div class="group"></div>')
    $.each(
      data.data.children.slice(0, 10),
      function (request, result) {
        // var thumbnail = $('<img/>')
        if (result.data.thumbnail == 'self' || result.data.thumbnail == null){
          group.append($('<img class="thumbnail"/>').attr('src','https://cdn1.iconfinder.com/data/icons/school-supplies-3/64/folder_denied_stop_not_found_deleted_error-128.png'));
        } else {
          group.append($('<img class="thumbnail"/>').attr('src',result.data.thumbnail));
        }
        group.append($('<br>') );
        // var url = $('<a href='#'></a>')
        group.append($('<a class="title"></a>').attr('href',result.data.url).attr('target',"_blank").text(result.data.title));
        // var description = $('<p></p>')
        group.append($('<p class="description"></p>').text("Click to read more!"));
        // // var ups = $('<p></p>')
        group.append($('<div class="ups"></div>').text(result.data.ups) );
        // // var num_comments = $('<p></p>')
        group.append($('<div class="comments"></div>').text(result.data.num_comments) );
        group.append($('<hr>') );
      })
    $("#content").empty().append(group);
  })
// .success(function() { alert("second success"); })
.error(function() {alert("Your search terms were not valid"); })
// .complete(function() { alert("complete"); });
}
}

$('#loadReq').on("click", loadIt);
