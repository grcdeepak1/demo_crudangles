// MAIN ANGULAR MODULE FILE

var crudAngles = angular.module('crudAngles', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: '/templates/postsLayout.html'
      })
      .state('posts.index',{
        url: "/index",
        templateUrl: '/templates/postsIndex.html',
        controller: 'PostsIndexCtrl'
      })


    $urlRouterProvider.otherwise('/posts');

  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});