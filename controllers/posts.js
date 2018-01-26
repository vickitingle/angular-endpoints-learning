var posts = postManager.controller('posts', ['$scope', '$http', 'postService', function($scope, $http, postService) {

$scope.postCollection;
$scope.currentPostsComments;

var getPosts = function() {
  $http.get('https://jsonplaceholder.typicode.com/posts')
   .then(function(response) {
     if (response.data) {
       $scope.postCollection = response.data;
     }
   });
}

$scope.getComments = function(post) {
   $http.get('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
    .then(function(response) {
      if (response.data) {
        post.showComments = true;
        console.log(response.data);
        post.comments = response.data;
      }
    });
 }

 $scope.toggleContent = function(postId) {
   var postElem = $('.post-' + postId);
   postElem.toggleClass('hidden');
   postElem.next('.content-toggle').toggleClass('show').toggleClass('hide');
 }

getPosts();

}]);
