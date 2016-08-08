// Code goes here
(function(){
  
  var app = angular.module("youtubeViewer",['ngSanitize']);
  
  var MainController = function($scope, youtube, $sce){
        
    $scope.search = function(search){
      youtube.getVideos(search).then(onUserComplete, onError);
    }

    var onUserComplete = function(data){
      $scope.video = data.items;
    }

    var onError =  function(reason){
      $scope.error = "Could not fetch the data";
    }

    $scope.abrir = function(id, titulo, descripcion){
        $scope.imgView = false;
        $scope.getIframeSrc = $sce.trustAsHtml("<iframe width='560' height='350' src='https://youtube.com/embed/"+id+"' frameborder='0' type='text/html'></iframe>");
        $scope.tituloVideo = titulo;
        $scope.descripcionVideo = descripcion;
    }

    $scope.tituloVideo = "Busque";
    $scope.descripcionVideo = "y seleccione un video";
    $scope.idV = "";
    $scope.getIframeSrc = "";
    $scope.imgView = true;
    $scope.search_i ="";
  }
  
  app.controller("MainController", MainController);
}());
