(function(exports) {
  function singleNoteView(note) {
    this.note = note;

    singleNoteView.prototype.displayHTML = function () {
      return this.note.text;
    };
  }
  exports.singleNoteView = singleNoteView;
})(this);
