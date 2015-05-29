// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'states/menu.html'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: 'states/home.html'
        }
      }
    })
    .state('app.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: 'states/about.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/home');

})

  .directive('snapTest', function() {
    return function(scope, element, attrs) {
        var s = Snap(element[0]);
        var selected = false;

        s.click(function() {
          if (selected === false) {
            s.select("path:nth-child(1)").animate({path: "M 12.972944,50.936147 51.027056,12.882035"}, 500);
            s.select("path:nth-child(2)").animate({opacity: 0}, 500);
            s.select("path:nth-child(3)").animate({path: "M 12.972944,12.882035 51.027056,50.936147"}, 500);
            selected = true;
          }
          else {
            s.select("path:nth-child(1)").animate({path: "m 5.0916789,20.818994 53.8166421,0"}, 500);
            s.select("path:nth-child(2)").animate({opacity: 1}, 500);
            s.select("path:nth-child(3)").animate({path: "m 5.0916788,42.95698 53.8166422,0"}, 500);
            selected = false;
          }
        })



        



    //     animation : [
    //   { 
    //     el : 'path:nth-child(1)', 
    //     animProperties : { 
    //       from : { val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}' }, 
    //       to : { val : '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}' }
    //     } 
    //   },
    //   { 
    //     el : 'path:nth-child(2)', 
    //     animProperties : { 
    //       from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' }, 
    //       to : { val : '{"opacity" : 0}' }
    //     } 
    //   },
    //   { 
    //     el : 'path:nth-child(3)', 
    //     animProperties : { 
    //       from : { val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}' }, 
    //       to : { val : '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}' }
    //     } 
    //   }
    // ]

        
        
    }
  });

