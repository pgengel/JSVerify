beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });

  //   "use strict";
  // jasmine.addMatchers({
  //   // Expects that property is synchronous
  //   toHold: function () {
  //     return {
  //       compare: function (actual) {
  //         var p = require("jsverify"); 
  //         /* global window */
  //         // var quiet = window && !(/verbose=true/).test(window.location.search);
  //         var options = { tests: 1, quiet: false };
  //         //var r = jsc.check(actual, { quiet: quiet });
  //         //var r = jsc.check(actual, options);
  //         p.check(actual, options);

  //         var pass = p === true;
  //         var message = "";

  //         if (pass) {
  //           message = "Expected property not to hold.";
  //         } else {
  //           message = "Expected property to hold. Counterexample found: " + r.counterexamplestr;
  //         }

  //         return {
  //           pass: pass,
  //           message: message,
  //         };
  //       },
  //     };
  //   },
  // });
});

