(function(){
	'use strict';

	angular.module('SandCastle') //Used SandCastle instaead of Directives, again as bellow, I assume theres another way to just use Directives, but its all relative to this controller right now anyways (porbaly should move mroe to the service)
		.directive('castleInfoDisplay', castleInfoDisplay);

		castleInfoDisplay.$inject = ['sandCastleService'];
		function castleInfoDisplay(sandCastleService){
			return {
				restrict: 'E',
        //transclude: true,
				scope: false,//{placeholder: "@",list: "=",property: "@"} //I figure theres a way with in {} but I'm nto quite quick enough to pick up on yet, this was easiest
				templateUrl: 'modules/directives/SandCastle/castleInfoDisplay.directive.html',
				link: function(scope) {
          var scv = sandCastleService;
          scope.castle = {};//scv.castle;
					function init(){
            scope.castle = scv.castle;

					}

					init();
				}
			};
		}
})();
