(function(exports) {
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        throw new Error("Assertion failed: " + assertion + " is not truthy");
      }
    },

    isFalse: function(assertion) {
      if (assertion) {
        throw new Error("Assertion failed: " + assertion + " is not false");
      }
    },

    isEqual: function(assertion, argument) {
      if (assertion !== argument) {
        throw new Error("Assertion failed: " + assertion + " is not equal to " + argument + ".");
      }
    },

    isDefined: function(assertion) {
      if (Object.prototype.toString.call(assertion) !== '[object Object]' )
        throw new Error("Assertion failed: " + assertion + " is undefined.");
    }
  };
  exports.assert = assert;
})(this);
