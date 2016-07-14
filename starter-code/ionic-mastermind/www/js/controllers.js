angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  // These icon classes are for mapping the selected guesses to the UI
  $scope.icons = ['ion-social-apple', 'ion-social-android','ion-social-angular','ion-social-html5'];

  // The current selected icon to assign to any clicked position.
  // TODO: Needs to be set when buttons in menu.html are clicked.
  $scope.selectedIcon = 0;

  // TODO: You're going to need a data structure to hold a list of "turns";
  // and those "turns" are likely going to be objects...
  $scope.turns = [];

  function Turn() {
    this.choice = [null, null, null, null];
    this.almost = 0;
    this.perfect = 0;
  }

  var generateSecret = function () {
    var secret = [];
    while (secret.length < 4) {
      secret.push(Math.floor(Math.random() *4))
    }
    return secret;
  }

  // Initialize game state
  $scope.newGame = function() {
    // TODO: Set all data properties/structures to their beginning state
    generateSecret();

    $scope.turns = [];

    $scope.turns.push(new Turn());

    $scope.currentTurn = $scope.turns.length - 1;

  };

  // Run newGame() upon loading
  $scope.newGame();

  /*
  TODO: Call this function when the user clicks a 'score' button.
        The 'score' button should remain disabled until all positions have a value.
        Maybe a button with an icon of a checkmark would be a good UI choice? Or,
        just use a small button with text of 'Score'?
  */
  $scope.scoreTurn = function() {
    // TODO: Score the turn

    // when button is cicked
    $scope.currentTurn.choices.forEach(function(choice, i) {
      if (choice === secret[i]) {
        perfect++;
      } else {
        if (secret.includes(choice)) {
          almost++;
        }
      }
      return $scope.currentTurn;
    });

    // see if this works once above works
    // choice === secret[i] ? perect++ : secret.includes(choice) ? almost++;

    // after score is calculated
    $scope.turns.push(new Turn());

    $scope.currentTurn = $scope.turns[length - 1];

    // TODO: Show winModal IF turn is correct. Put line below in an if statement.
    // $scope.winModal.show();
  };


  // Create the winner modal.
  $ionicModal.fromTemplateUrl('templates/winner.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.winModal = modal;
  });

  // TODO: Call this function from the 'Play Again!' button in winModal's html (winner.html)
  $scope.playAgain = function() {
    $scope.newGame();
    $scope.winModal.hide();
  };

});
