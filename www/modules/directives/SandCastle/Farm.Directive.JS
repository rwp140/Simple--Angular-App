(function(){
	'use strict';

	angular.module('SandCastle') //Used SandCastle instaead of Directives, again as bellow, I assume theres another way to just use Directives, but its all relative to this controller right now anyways (porbaly should move mroe to the service)
		.directive('farmDirective', farmDirective);

		farm.$inject = ['sandCastleService'];
		function farmDirective(sandCastleService){
			return {
				restrict: 'E',
        //transclude: true,
				scope: false,//{placeholder: "@",list: "=",property: "@"} //I figure theres a way with in {} but I'm not quite quick enough to pick up on yet, this was easiest
				templateUrl: 'modules/directives/SandCastle/Farm.Directive.html',
				link: function(scope) {
					function init(){

					}

					init();
				}
			};
		}
})();
