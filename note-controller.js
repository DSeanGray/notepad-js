(function(exports) {
  function noteController() {
    this.list = new listOfNotes();
  }

    noteController.prototype.changeText = function () {
      document.getElementById("app").innerHTML = "wazzaaaaaaaaap";
    };

    noteController.prototype.submitNote = function () {
      console.log("HEllo");
      var noteInput = document.getElementById("noteInput");
      list.writeNote(noteInput);
    };

    exports.noteController = noteController;
})(this);
