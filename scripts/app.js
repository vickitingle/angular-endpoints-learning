var postManager = angular.module('postManager', ['ngRoute']);

postManager.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/post/:id', {
        templateUrl: 'views/post.html',
        controller: 'post'
      }).otherwise({
        redirectTo: '/',
        templateUrl: 'views/posts.html',
        controller: 'posts'
      });
    }
  ]);
