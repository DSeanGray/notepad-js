(function(exports) {
  function noteController() {
    this.list = new listOfNotes();
    this.noteListView = new noteListView(this.list);
  }

    noteController.prototype.changeText = function () {
      this.list.writeNote("asdkjlelrkjvnaelrkj");
      console.log(this.list);
      document.getElementById("app").innerHTML = this.noteListView.displayPage();
      console.log(this.list.listItems);
    };

    exports.noteController = noteController;
})(this);
