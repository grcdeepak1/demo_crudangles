crudAngles.controller('PostsShowCtrl', ['$scope', 'post', 'Restangular',
          function($scope, post, Restangular){


            $scope.post = post;

            $scope.addComment = function(){

                Restangular.all('comments').post({ comment: { author: $scope.newComment.author,
                                                              body:   $scope.newComment.body,
                                                              post_id:  $scope.post.id }})
                                .then(function(createdComment){
                                  $scope.post.comments.push(createdComment);
                                  $scope.newComment = {};
                                })

            }
        }])