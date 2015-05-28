(function() {

  angular
    .module('starter')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$http', '$stateParams', '$location', '$ionicScrollDelegate', '$ionicModal', '$scope'];

    function ApplicationController($http, $stateParams, $location, $ionicScrollDelegate, $ionicModal, $scope) {
      var self = this;

      self.groups = [];

      for (var i=0; i<15; i++) {
        self.groups[i] = {
          title: "Title " + i,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed tempor dolor, in sodales sapien. Vivamus tortor augue, feugiat a mattis et, venenatis sit amet elit. In hac habitasse platea dictumst. Vivamus varius blandit nulla sodales imperdiet. Aliquam nec ex ac nulla mollis facilisis. Morbi elementum laoreet leo, eu maximus nunc porta eget. Vestibulum nec metus libero. Proin vel lacus consectetur, ultricies ex at, molestie augue. Morbi blandit, augue ac condimentum pellentesque, tortor mi fringilla dolor, a lacinia lacus libero in velit. Sed auctor, eros id euismod sodales, quam massa scelerisque dolor, sed condimentum elit risus ac orci. Suspendisse viverra lobortis egestas. Morbi varius lacinia ex at feugiat. Nunc sed accumsan mi, a vehicula libero. Aliquam convallis vehicula nisi, eget venenatis ligula tincidunt in. Nunc mattis facilisis tellus, in condimentum sem vulputate vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          id: i
        };
      }

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


      // scroll function
      self.scrollToTop = function(elementId) {
        var height = 120 * (elementId);

        setTimeout(function() {
          $ionicScrollDelegate.scrollTo(0, height, true);
        }, 100);

      };

      // menu that pops up
      $ionicModal.fromTemplateUrl('my-modal.html', {
          scope: $scope,
          animation: 'slide-in-up'
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
          svg.click();
          console.log(svg);
          console.log("hi")
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
          // Execute action
        });


    }

})();

