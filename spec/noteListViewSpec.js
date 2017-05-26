(function() {
  var list = new listOfNotes();
  var note = new Note('testnote');
  var view = new noteListView();
  var controller = new noteController(list);

  assert.isDefined(controller.list);
  console.log('controller is instantiated with a List model');

})();

(function() {
  var list = new listOfNotes();
  var view = new noteListView(list);
  list.writeNote("Favourite food: pesto");
  list.writeNote("Favourite drink: seltzer");
  assert.isEqual(view.displayPage(), "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
  console.log("view outputs html to be rendered on the page.");
})();
