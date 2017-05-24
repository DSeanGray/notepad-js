(function() {
  var list = new listOfNotes();
  var view = new noteListView(list);
  list.writeNote("Favourite food: pesto");
  list.writeNote("Favourite drink: seltzer");
  assert.isEqual(view.displayPage(), "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
})();
