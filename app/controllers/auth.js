'use strict';
 
app.controller('AuthCtrl',
  function ($scope, $location, Auth, User) {

     // Native navigation
      steroids.view.navigationBar.show("User Login");
      steroids.view.setBackgroundColor("#FFFFFF");



    // if (Auth.signedIn()) {
    //   $location.path('/');
    // }

    $scope.login = function () {
      Auth.login($scope.user).then( function () {
        $location.path('/');
      }, function(error) {
        $scope.error = error.toString();

      });
    };

    $scope.register = function () {
      Auth.register($scope.user).then(function (authUser) {
        User.create(authUser, $scope.user.username);
        $location.path('/login');

      }, function (error) {
        $scope.error=error.toString();
      });
    };


    $scope.tasks = function() {
      var webView = new steroids.views.WebView("/views/task/index.html");
      steroids.layers.push(webView);
    }

  });