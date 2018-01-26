var post = postManager.controller('post', ['$scope', '$http', '$routeParams', 'postService', function($scope, $http, $routeParams, postService) {
  
  var postId = $routeParams.id;
  $scope.post;

  
  var getPost = function() {
    $http.get('https://jsonplaceholder.typicode.com/posts/' + postId)
     .then(function(response) {
       if (response.data) {
         $scope.post = response.data;
       }
     });
  }
  
  $scope.toggleComments = function(post) {
    if (!post.showComments) {
      $http.get('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
      .then(function(response) {
        if (response.data) {
          post.showComments = true;
          post.comments = response.data;
        }
      });
    } else {
      post.showComments = false;
    }
   
 }

  
  getPost();
  
  
  }]);
