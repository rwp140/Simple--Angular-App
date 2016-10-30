(function() {
	'use strict';

	angular.module('SandCastle')
		.service('farmsService', farmsService);

		farmsService.$inject = [];//'sandCastleService'
		function farmsService() { //sandCastleService
			var service = this;
			/* ======================================== Var ==================================================== */

			service.farms = [];
      service.test= "Farm Service : service is active"; //proves is service is reachable

      service.totalFarmers = 0;// cost workers
      const maxFarmersPerFarm = 50;//per farm
      service.maxFarmers = 50;//per farm
      const farmRatePerFarm = 5;//5 units of food per farm every interval 15 seconds
      const farmerRatePerFarm = 0.5;//5 units of food per farm every interval 15 seconds
      service.farmRate = 0; //
      service.farmCost = 250;//score
      service.farmerCost = 50;//score
	    /* ======================================== Services =============================================== */

	    /* ======================================== Public Methods ========================================= */
			//service.Test = function()
			//{
				//console.log("farmsService : test");
				//farms.push( new farmsService());
				//farms.push( new farmsService());
				//farms.push( new farmsService());
				//for(let i; i<farms.length; i++)
				//{
					//console.log("sandCastleService : " + farms[i].Test);
				//}
			//}
      service.BuildFarm = function(_score,_workNum){
        if(_score>=service.farmCost && service.totalFarmers< service.maxFarmers && _workNum >= 5)
        {
          _score=service.score-service.farmCost;
          var _farm = new FarmObject();
          service.farms.push(_farm);//value:"farm"});//new service.farm());// cost workers
          service.farms[service.farms.length-1].AddAcre();
          _workNum -=5;
          service.totalFarmers+=5;//keeps track of total
        }
        UpdateFarmRate();
      }
      service.TrainFarmers = function(_farm){
        if(service.totalFarmers< service.maxFarmers && service.score>=service.farmerCost && service.workNum > 0)
        {
          service.score=service.score-service.farmerCost;
          service.workNum --;
          service.totalFarmers++;//adds to total
          _farm.farmers ++;
          _farm.unAssignedFarmers ++;
        }
        UpdateFarmRate();
      }
      service.AssignFarmersToAcre = function (_farm,_acre){
        if(_farm.unAssignedFarmers >0)
        {
          _farm.farmers --;
          _farm.unAssignedFarmers --;
          _acre.farmers ++;
        }
        UpdateFarmRate();
      }
      service.BuildAcre = function(_farm){
        if(_farm.unAssignedFarmers >= 5)
        {
          _farm.AddAcre();
        }
        UpdateFarmRate();
      }
			service.ProduceFood =function(){
				service.maxFarmers = maxFarmersPerFarm*service.farms.length;
				//service.farmRate = farmRatePerFarm*service.farms.length+(service.farmers*farmerRatePerFarm);

				service.food = service.food + service.farmRate;


			}
	    /* ======================================== Private Methods ======================================== */
      function FarmObject(){
        this.value="Farm";
        this.farmersTotal = 5;
        this.unAssignedFarmers = 5;
        this.quality = "basic farm";
        this.qualityLevel = 1;
        this.acres = [];
        this.AddAcre = function()
        {
          this.acres.push( new acre());
          this.unAssignedFarmers -=5;
        }

      };
      function acre(){
        this.farmers= 5;
        this.qualityLevel = 1;
      };

      function UpdateFarmRate(){
        service.farmRate = 0;
        var farmRate_ = 0;
        for(let i=0,l=service.farms.length; i<l; i++){
          let farm = service.farms[i];
          for(let n = 0,s=farm.acres.length; i<s; i++){
            let acre = farm.acres[i];
            console.log("acre.qualityLevel "+acre.qualityLevel);
            console.log("acre.farmers "+acre.farmers);
            farmRate_ +=acre.qualityLevel*acre.farmers;
            console.log("farm rate "+farmRate_);
          }
          console.log("acres "+farm.acres.length );
          console.log("farm.qualityLevel "+farm.qualityLevel);
          farmRate_ +=  (farm.acres.length * ((farm.qualityLevel)/2));
          console.log("farm rate "+farmRate_);
          service.farmRate += farmRate_;//+(service.farmers/10);
        }
      }
		}
})();
