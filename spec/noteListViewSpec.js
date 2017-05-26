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

(function() {
  var list = new listOfNotes();
  var view = new noteListView(list);
  var response = "<ul><li><div id='0' >Bikes: Decent road o</div></li><li><div id='1' >Tony, went to the pa</div></li></ul>";
  list.writeNote("Bikes: Decent road ones that aren't built by Halfords, with poor groupsets and frame design");
  list.writeNote("Tony, went to the park and bought ice cream, it was not good ice cream... Dragonforce.");
  assert.isEqual(view.displayPage(), response );
})();
