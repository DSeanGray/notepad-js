(function() {
  var list = new listOfNotes();
  var note = new Note('testnote');
  var view = new noteListView();
  var controller = new noteController(list);

  assert.isDefined(controller.list);
  console.log('controller is instantiated with a List model');

})();
