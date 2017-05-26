(function(exports) {
  function noteListView (list) {
    this.list = list;
  }
  noteListView.prototype.displayPage = function() {
    var display = "<ul>";
    this.list.listItems.forEach(function(note) {
      for (var i = 0; i < this.list.length; i++ ){

      }
      display += ("<li><div>" + note.text.substring(0,20) + "</div></li>");
    });
    return (display + "</ul>");
  };

  exports.noteListView = noteListView;
})(this);
