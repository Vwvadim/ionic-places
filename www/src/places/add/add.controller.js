angular.module('places')
.controller('PictureCtrl', function($scope, $cordovaCamera) {

//  document.addEventListener("deviceready", function () {
alert ("getPicture")
    $scope.getPicture= function(){
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
      alert ("success")
    }, function(err) {
      alert ("error")
      // error
    });
}
//  }, false);
});
