(function() {
  var list = new listOfNotes();
  var view = new noteListView(list);
  list.writeNote("Favourite food: pesto");
  list.writeNote("Favourite drink: seltzer");
  assert.isEqual(view.displayPage(), "<ul><li><div id='0'><a href='notes/1'>Favourite food: pest</a></div></li><li><div id='1'><a href='notes/2'>Favourite drink: sel</a></div></li></ul>");
  console.log("view outputs html to be rendered on the page.");
})();

(function(){
  var list = new listOfNotes();
  var view = new noteListView(list);
  var response = "<ul><li><div id='0'><a href='notes/1'>Bikes: Decent road o</a></div></li></ul>";
  list.writeNote("Bikes: Decent road ones that aren't built by Halfords, with poor groupsets and frame design");
  assert.isEqual(view.displayPage(), response);
  console.log("limits view content to 20 chars");
})();

(function() {
  var list = new listOfNotes();
  var view = new noteListView(list);
  var response = "<ul><li><div id='0'><a href='notes/1'>Bikes: Decent road o</a></div></li><li><div id='1'><a href='notes/2'>Tony, went to the pa</a></div></li></ul>";
  list.writeNote("Bikes: Decent road ones that aren't built by Halfords, with poor groupsets and frame design");
  list.writeNote("Tony, went to the park and bought ice cream, it was not good ice cream... Dragonforce.");
  assert.isEqual(view.displayPage(), response );
})();

(function() {
  var list = new listOfNotes();
  var view = new noteListView(list);
  var response = "<ul><li><div id='0'><a href='notes/1'>Bikes: Decent road o</a></div></li><li><div id='1'><a href='notes/2'>Tony, went to the pa</a></div></li></ul>";
  list.writeNote("Bikes: Decent road ones that aren't built by Halfords, with poor groupsets and frame design");
  list.writeNote("Tony, went to the park and bought ice cream, it was not good ice cream... Dragonforce.");
  assert.isEqual(view.displayPage(), response );
})();
