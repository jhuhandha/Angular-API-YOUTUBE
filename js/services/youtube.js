(function(){
  
  var youtube = function($http){
    
    var getVideos = function(search_input){

      var keyword= encodeURIComponent(search_input);
      var yt_url='http://gdata.youtube.com/feeds/api/videos?q='+keyword+'&format=5&v=2&alt=jsonc';

      return $http.get(yt_url).then(function(response){
                return response.data.data;
             })
    }
    
    return {
      getVideos : getVideos
    }
    
  }
  
  var module = angular.module("youtubeViewer");
  module.factory("youtube", youtube);
}());