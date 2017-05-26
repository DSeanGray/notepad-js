(function(exports) {
  function noteListView (list) {
    this.list = list;
  }
  noteListView.prototype.displayPage = function() {
    var display = "<ul>";
    var i = 0;
    this.list.listItems.forEach(function(note) {
      display += ("<li><div id='" + i + "'>" + note.text.substring(0,20) + "</div></li>");
      i = i + 1;
    });
    return (display + "</ul>");
  };

  exports.noteListView = noteListView;
})(this);
