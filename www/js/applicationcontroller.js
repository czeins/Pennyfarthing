(function() {

  angular
    .module('starter')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$http', '$stateParams', '$location', '$ionicScrollDelegate', '$ionicModal', '$sce', '$scope', '$ionicViewService'];

    function ApplicationController($http, $stateParams, $location, $ionicScrollDelegate, $ionicModal, $sce, $scope, $ionicViewService) {
      var self = this;
      var hamburgerSelected = false;
      self.groups = [];


      var html = '';
      function getHtml() {
        $http.get('https://blooming-falls-8685.herokuapp.com/api/v1/stories')
          .success(function(data){
          var storyLength = data.length;
            for (var i=0; i<storyLength; i++) {
              self.groups[i] = {
                title: data[i].title,
                content: $sce.trustAsHtml(data[i].html),
                id: i,
                headerimg: data[i].headerimg.url,
                visible: true
              };
            }


          });
      }

      getHtml();

      var clicked = false;

      self.setVisibility = function(id){
        if (clicked === false) {
          for (var q=0; q<self.groups.length; q++) {
            self.groups[q].id === id ? self.groups[q].visible = true : self.groups[q].visible = false;
          }
          clicked = true;
        } else {
            for (var j=0; j<self.groups.length; j++) {
              self.groups[j].visible = true;
            }
          clicked = false;
          }
      };

      // accordion function
      self.toggleGroup = function(group) {
          if (self.isGroupShown(group)) {
            self.shownGroup = null;
          } else {
            self.shownGroup = group;
          }
        };
      self.isGroupShown = function(group) {
        return self.shownGroup === group;
      };


      self.toggleHamburger = function() {
        var s = Snap('#svg2');
          if (hamburgerSelected === false) {
            s.select("path:nth-child(1)").animate({path: "M 12.972944,50.936147 51.027056,12.882035"}, 500);
            s.select("path:nth-child(2)").animate({opacity: 0}, 500);
            s.select("path:nth-child(3)").animate({path: "M 12.972944,12.882035 51.027056,50.936147"}, 500);
            hamburgerSelected = true;
          }
          else {
            s.select("path:nth-child(1)").animate({path: "m 5.0916789,20.818994 53.8166421,0"}, 500);
            s.select("path:nth-child(2)").animate({opacity: 1}, 500);
            s.select("path:nth-child(3)").animate({path: "m 5.0916788,42.95698 53.8166422,0"}, 500);
            hamburgerSelected = false;
          }
      }

      var modalShowing = false;
      self.toggleModal = function(){
        if (!modalShowing) {
          $scope.modal.show();
          modalShowing = true;
        }
        else {
          $scope.modal.hide();
          modalShowing = false;
        }
      }

      // menu that pops up
      $ionicModal.fromTemplateUrl('my-modal.html', {
          scope: $scope,
          animation: 'scale-in'
        }).then(function(modal) {
          $scope.modal = modal;
        });
        $scope.openModal = function() {
          $scope.modal.show();
        };
        $scope.closeModal = function() {

          $scope.modal.hide();
        };

        $scope.$on('$destroy', function() {
          $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
          var svg = document.getElementById("svg2");
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
          // Execute action
        });


    }

})();

