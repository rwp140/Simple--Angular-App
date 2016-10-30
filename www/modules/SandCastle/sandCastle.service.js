(function() {
	'use strict';

	angular.module('SandCastle')
		.service('sandCastleService', sandCastleService);

		sandCastleService.$inject = ['farmsService'];//'farmsService'
		function sandCastleService(farmsService) {//farmsService
			var service = this;

			service.initTest = initTest;

			service.BuildFarm = BuildFarm;
			service.TrainFarmers = TrainFarmers;
			service.AssignFarmersToAcre = AssignFarmersToAcre;
			service.BuildAcre = BuildAcre;

			service.TrainWorker = TrainWorker;
			service.update = update;
			/* ======================================== Var ==================================================== */
			const consumtionRate = 0.65;
			//TODO sort non constants into an object {key: value} system
			service.castle =
			{
			     score:1750,
           castleName :"château de sable",
           workNum:10,
           //totalWorkers:10,
           consumption: (consumtionRate * totalWorkers),
           workerCost:100,
           food:500
			}
      service.farms = [];
			//service.score = 1750;
			//service.castleName = "château de sable";
			//service.workNum = 10;
			var totalWorkers = 10;
			//service.consumption = consumtionRate * totalWorkers;
			//service.workerCost = 100;//score
			//service.food = 500;

			//service.masons = 0;
			//service.MasonaryhouseCost = 500; //per craftsman house
			//service.maxMasons= 15;

	    /* ======================================== Services =============================================== */

			var fSvc = farmsService;
	    /* ======================================== Public Methods ========================================= */
			function initTest()
			{
				console.log("sand Castle Service : service active");
				console.log(fSvc.test);

			}

			function BuildFarm(){
				fSvc.BuildFarm(service.castle.score,service.castle.workNum);
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

			function TrainFarmers(_farm){
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
			function AssignFarmersToAcre (_farm,_acre){
				fSvc.AssignFarmersToAcre(_farm,_acre);
				/*if(_farm.unAssignedFarmers >0)
				{
					_farm.farmers --;
					_farm.unAssignedFarmers --;
					_acre.farmers ++;
				}
				UpdateFarmRate();*/
			}
			function BuildAcre(_farm){
				fSvc.BuildAcre(_farm);
				/*if(_farm.unAssignedFarmers >= 5)
				{
					_farm.AddAcre();
				}
				UpdateFarmRate();*/
			}
			function TrainWorker(){
				if(service.castle.score>=service.castle.workerCost)
				{
					service.castle.score=service.castle.score-service.castle.workerCost;
					service.castle.workNum +=5;
					//totalWorkers +=5;
				}
			}

			function update(){
				Consumtion();
				ProduceFood();
				//cmnSvc.$timeout(update, (intervalCheckTime*1000));
			}
			//gets
			service.GetFarms = function(){//TODO remove this add
        var farms_ = fSvc.farms;
        console.log(farms_);
				return farms_;
			}
	    /* ======================================== Private Methods ======================================== */
      function init()
      {
          service.farms = fSvc.farms;

      }
			function ProduceFood(){
				//service.maxFarmers = maxFarmersPerFarm*service.farms.length;
				//service.farmRate = farmRatePerFarm*service.farms.length+(service.farmers*farmerRatePerFarm);
				let farmRate_ = fSvc.ProduceFood();
				service.castle.food = service.castle.food + service.castle.farmRate;


			}
			function Consumtion(){
				if(service.castle.food >100)
				{
					service.castle.consumption = consumtionRate * totalWorkers;
					service.castle.food = service.castle.food - service.castle.consumption;
				}else{
				//all workers but farmers stop working tell theres at least 100
				}

			}
			//constructor
			//function CastleObject()
			//{

			//}
      init();
		}

})();
