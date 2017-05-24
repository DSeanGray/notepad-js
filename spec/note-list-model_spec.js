(function() {
    var list = new listOfNotes();
    var note = new Note('testnote');
    list.addNote(note);
    assert.isTrue(Array.isArray(list.listItems));
    assert.isEqual(list.getNote(), note);
    console.log('list of notes stores and retrieves a note');
})();
(function() {
    var list = new listOfNotes();
    list.writeNote('a note with this text in it');
    assert.isEqual(list.getNote().text, new Note('a note with this text in it').text);
    console.log('list of notes writes a note');
})();
