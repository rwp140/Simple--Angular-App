(function() {
	'use strict';

	angular.module('SandCastle')
		.service('sandCastleService', sandCastleService);

		sandCastleService.$inject = ['farmsService'];//'farmsService'
		function sandCastleService(farmsService) {//farmsService
			var service = this;
			/* ======================================== Var ==================================================== */
			const consumtionRate = 0.65;
			//TODO sort non constants into an object {key: value} system
			service.score = 1750;
			service.castleName = "château de sable";
			service.workNum = 10;
			var totalWorkers = 10;
			service.consumption = consumtionRate * totalWorkers;;
			service.workerCost = 100;//score
			service.masons = 0;
			service.food = 500;
			service.MasonaryhouseCost = 500; //per craftsman house
			service.maxMasons= 15;

			service.castleArea = "Court";
	    /* ======================================== Services =============================================== */

			var fSvc = farmsService;
	    /* ======================================== Public Methods ========================================= */
			service.Test = function()
			{
				console.log("sand Castle Service : service active");
				console.log(fSvc.test);

			}

			service.BuildFarm = function()
			{
				fSvc.BuildFarm();
				/*if(service.score>=service.farmCost && service.farmers < service.maxFarmers && service.workNum >= 5)
				{
					service.score=service.score-service.farmCost;
					var _farm = new FarmObject();
					service.farms.push(_farm);//value:"farm"});//new service.farm());// cost workers
					service.farms[service.farms.length-1].AddAcre();
					service.workNum -=5;
					service.farmers +=5;//keeps track of total
				}
				UpdateFarmRate();*/

			}

			service.TrainFarmers = function(_farm)
			{
					fSvc.TrainFarmers(_farm);
				/*if(service.farmers < service.maxFarmers && service.score>=service.farmerCost && service.workNum > 0)
				{
					service.score=service.score-service.farmerCost;
					service.workNum --;
					service.farmers ++;//adds to total
					_farm.farmers ++;
					_farm.unAssignedFarmers ++;
				}
				UpdateFarmRate();*/
			}
			service.AssignFarmersToAcre = function (_farm,_acre)
			{
				fSvc.AssignFarmersToAcre(_farm,_acre);
				/*if(_farm.unAssignedFarmers >0)
				{
					_farm.farmers --;
					_farm.unAssignedFarmers --;
					_acre.farmers ++;
				}
				UpdateFarmRate();*/
			}
			service.BuildAcre = function(_farm)
			{
				fSvc.BuildAcre(_farm);
				/*if(_farm.unAssignedFarmers >= 5)
				{
					_farm.AddAcre();
				}
				UpdateFarmRate();*/
			}
			service.TrainWorker = function()
			{
				if(service.score>=service.workerCost)
				{
					service.score=service.score-service.workerCost;
					service.workNum +=5;
					//totalWorkers +=5;
				}
			}

			service.update = function()
			{
				Consumtion();
				ProduceFood();
				//cmnSvc.$timeout(update, (intervalCheckTime*1000));
			}
	    /* ======================================== Private Methods ======================================== */

			function ProduceFood()
			{
				//service.maxFarmers = maxFarmersPerFarm*service.farms.length;
				//service.farmRate = farmRatePerFarm*service.farms.length+(service.farmers*farmerRatePerFarm);
				let farmRate_ = fSvc.ProduceFood();
				service.food = service.food + service.farmRate;


			}
			function Consumtion()
			{
				if(service.food >100)
				{
					service.consumption = consumtionRate * totalWorkers;
					service.food = service.food - service.consumption;
				}else{
				//all workers but farmers stop working tell theres at least 100
				}

			}
		}

})();
