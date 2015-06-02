(function() {

  angular
    .module('starter')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$http', '$stateParams', '$location', '$ionicScrollDelegate', '$ionicModal', '$scope'];

    function ApplicationController($http, $stateParams, $location, $ionicScrollDelegate, $ionicModal, $scope) {
      var self = this;
      var hamburgerSelected = false;
      self.groups = [];

      
      var html = '';
      function getHtml() {
        $http.get('https://fast-bastion-6637.herokuapp.com/api/v1/stories/')
          .success(function(data){
         
          var storyLength = data.length;
            for (var i=0; i<storyLength; i++) {
                var html = data[i].html;
               console.log(data[i].html);
              self.groups[i] = {
                title: data[i].title,
                content: html,
                id: i,
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
        console.log(s);
          if (hamburgerSelected === false) {
            s.select("path:nth-child(1)").animate({path: "M 12.972944,50.936147 51.027056,12.882035", stroke: "#000000"}, 500);
            s.select("path:nth-child(2)").animate({opacity: 0, stroke: "#000000"}, 500);
            s.select("path:nth-child(3)").animate({path: "M 12.972944,12.882035 51.027056,50.936147", stroke: "#000000"}, 500);
            hamburgerSelected = true;
          }
          else {
            s.select("path:nth-child(1)").animate({path: "m 5.0916789,20.818994 53.8166421,0", stroke: "#ffffff"}, 500);
            s.select("path:nth-child(2)").animate({opacity: 1, stroke: "#ffffff"}, 500);
            s.select("path:nth-child(3)").animate({path: "m 5.0916788,42.95698 53.8166422,0", stroke: "#ffffff"}, 500);
            hamburgerSelected = false;
          }
        // document.getElementById("svg2").click();
      }


      // scroll function
      self.scrollToTop = function(elementId) {
        // var height = 120 * (elementId);

        // setTimeout(function() {
        //   $ionicScrollDelegate.scrollTo(0, height, true);
        // }, 100);

      };

      var modalShowing = false;
      self.toggleModal = function(){
        if (!modalShowing) {
          console.log("hi")
          $scope.modal.show();
          modalShowing = true;
        }
        else {
          $scope.modal.hide();
          console.log("bye")
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
          console.log(svg)
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
          // Execute action
        });


    }

})();

