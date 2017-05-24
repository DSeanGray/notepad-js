(function(exports) {
  function noteController() {
    this.list = new listOfNotes();
    // this.noteListView = new noteListView(this.list);
  }

    noteController.prototype.changeText = function () {
      // this.list.writeNote("asdkjlelrkjvnaelrkj");
      // document.getElementById("app").innerHTML = this.noteListView.displayPage();
    };

    exports.noteController = noteController;
})(this);
