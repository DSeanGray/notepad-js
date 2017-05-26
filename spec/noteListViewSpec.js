// (function() {
//   var list = new listOfNotes();
//   var note = new Note('testnote');
//   var view = new noteListView();
//   var controller = new noteController(list);
//
//   assert.isDefined(controller.list);
//   console.log('controller is instantiated with a List model');
//
// })();

(function() {
  var list = new listOfNotes();
  var view = new noteListView(list);
  list.writeNote("Favourite food: pesto");
  list.writeNote("Favourite drink: seltzer");
  assert.isEqual(view.displayPage(), "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>");
  console.log("view outputs html to be rendered on the page.");
})();

(function(){
  var list = new listOfNotes();
  var view = new noteListView(list);
  var response = "<ul><li><div>Bikes: Decent road o</div></li></ul>";
  list.writeNote("Bikes: Decent road ones that aren't built by Halfords, with poor groupsets and frame design");
  assert.isEqual(view.displayPage(), response);
  console.log("limits view content to 20 chars");
})();
