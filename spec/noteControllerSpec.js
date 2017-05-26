(function(){
  var list = new listOfNotes();
  var view = new noteListView(list);
  var controller = new NoteController();
  assert.isDefined(controller, new NoteController());
}
)();
