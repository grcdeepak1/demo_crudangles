crudAngles.controller('PostsIndexCtrl', ['$scope', 'posts', 'Restangular',
  function($scope, posts, Restangular){
    $scope.posts = posts;

    $scope.addPost = function(){

      Restangular.all('posts').post({ post: { author: $scope.newPost.author,
                                              body:   $scope.newPost.body,
                                              title:  $scope.newPost.title }})
                              .then(function(createdPost){
                                $scope.posts.push(createdPost);
                                $scope.newPost = {};
                              })

    }
  }])