angular.module('app',[])
.controller('appController',function ($scope,$http){

	$scope.post = [];
	$scope.Nuevopost = {};

	$http.get('http://jsonplaceholder.typicode.com/posts')
		.success(function(data){
			$scope.post = data;
		})
		.error(function(err){
			console.log(err);
		});

	$scope.Crearpost = function(){
		$http.post('http://jsonplaceholder.typicode.com/posts',{
			title : $scope.Nuevopost.title,
			body : $scope.Nuevopost.body,
			userId: 1
		})
			.success(function(data,status,headers,conf){
				$scope.post.push(data);
				$scope.NuevoPost = {};
			})
			.error(function(err,status,headers,conf){
				console.log(err)
			});
	}
});