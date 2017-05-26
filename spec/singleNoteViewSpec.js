(function() {
  var noteView = new singleNoteView();
  assert.isDefined(noteView);
  console.log("noteView is an object");
})();

(function() {
  var note = new Note("Hello Chris");
  var noteView = new singleNoteView(note);

  assert.isEqual(noteView.displayHTML(), "<div>" + note.text + "</div>");
  console.log("adds content to the page");
})();
