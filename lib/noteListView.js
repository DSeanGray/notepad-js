(function(exports) {
  function noteListView (list) {
    this.list = list;
  }
  noteListView.prototype.displayPage = function() {
    var display = "<ul>";
    var i = 0;
    var page = 1;
    this.list.listItems.forEach(function(note) {
      display += ("<li><div id='" + i + "'>" + "<a href='notes/" + page +"'>" + note.text.substring(0,20)+ "</a>" + "</div></li>");
      i = i + 1;
      page = page + 1;
    });
    return (display + "</ul>");
  };

  exports.noteListView = noteListView;
})(this);
