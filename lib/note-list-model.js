(function(exports) {
  var listOfNotes = function() {
    this.listItems = [];
  };
  listOfNotes.prototype.addNote = function(note) {
    this.listItems.push(note);
  };
  listOfNotes.prototype.getNote = function() {
    return this.listItems.pop();
  };
  listOfNotes.prototype.writeNote = function(text) {
    this.addNote(new Note(text));
  };
  exports.listOfNotes = listOfNotes;
})(this);
