var postService = postManager.service('postService', function($http) {
  var postService = {};

  function getComments() {

  }

  postService.getComments = function(postId) {
    console.log(postId);
    $http.get('https://jsonplaceholder.typicode.com/posts/' + postId)
     .then(function(response) {
       console.log(response);
         return response.data;
     });
  }

  return postService;
});
