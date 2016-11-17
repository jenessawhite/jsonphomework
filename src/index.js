function loadIt(){

var pageReq = $('#pageReq').val();

$.getJSON(
  "https://www.reddit.com/r/" + pageReq + ".json",
  function goGetIt(data)
  {
    var group = $('<div class="group"></div>')
    $.each(
      data.data.children.slice(0, 10),
      function (request, result) {
        // var title = $('<h2></h2>')
        group.append($('<h2></h2>').text(result.data.title));
        // var url = $('<a href='#'></a>')
        group.append($('<a><a>').attr('href',result.data.url).text(result.data.url));
        // var url = $('<img/>')
        group.append($('<img/>').attr('src',result.data.thumbnail));
        // // var ups = $('<p></p>')
        group.append($('<p></p>').text(result.data.ups) );
        // // var downs = $('<p></p>')
        group.append($('<p></p>').text(result.data.downs) );
      }
    )
    $("#content").empty().append( group );
  }
)
// .success(function() { alert("second success"); })
.error(function() { alert("error"); })
// .complete(function() { alert("complete"); });
}

$('#loadReq').on("click", loadIt);
