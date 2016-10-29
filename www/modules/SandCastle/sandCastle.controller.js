(function() {
    'use strict';

    angular.module('SandCastle')
        .controller('sandCastleController', sandCastleController);

    sandCastleController.$inject = ['commonService','sandCastleService']; //'farmsService',

    function sandCastleController(commonService, sandCastleService) {//farmsService,
        var vm = this;

        /* ======================================== Var ==================================================== */
        vm.misc = {castleName: "TEST1"};
        //TODO sort out and move the aporopait vars and methods (if not most or all of them) to sandCastleService
        const intervalCheckTime = 1;//eve x seconds
        //const consumtionRate = 0.65;
        //TODO sort non constants into an object {key: value} system
        //vm.score = 1750;
        //vm.castleName = "château de sable";
        //vm.workNum = 10;
        //var totalWorkers = 10;
        //vm.consumption = consumtionRate * totalWorkers;;
        //vm.workerCost = 100;//score
        //vm.farms = [];// cost workers
        /*
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
        function acre()
        {
          this.farmers = 5;
          this.qualityLevel = 1;
        };
        */
        //vm.farmers = 0;// cost workers
        //const maxFarmersPerFarm = 50;//per farm
        //vm.maxFarmers = 50;//per farm
        //const farmRatePerFarm = 5;//5 units of food per farm every interval 15 seconds
        //const farmerRatePerFarm = 0.5;//5 units of food per farm every interval 15 seconds
        //vm.farmRate = 0; //
        //vm.farmCost = 250;//score
        //vm.farmerCost = 50;//score
        //vm.masons = 0;
        //vm.food = 500;
        //vm.MasonaryhouseCost = 500; //per craftsman house
        //vm.maxMasons= 15;

        //vm.castleArea = "Court";
        //TODO move to seperate service and/or controller
        vm.showInfoBool= true;
        vm.showBTNText = "show";
        vm.showText = ">";
        /* ======================================== Services =============================================== */
  			//var fSvc = farmsService;
        var svc = sandCastleService;
        var cmnSvc = commonService;

        /* ======================================== Public Methods ========================================= */
        vm.ChangeArea = function(area)
        {
          console.log(area);
          //TODO add var testing so unexpected strings don't make it through
          vm.castleArea = area;
        }
        vm.ShowInfo = function()
        {
          vm.showInfoBool= !vm.showInfoBool;
          if(vm.showInfoBool)
          {
            vm.showBTNText = "show";
            vm.showText = ">";
          } else {
            vm.showBTNText = "hide";
            vm.showText = "<";
          }
        }
        vm.TrainWorker = function()
        {
          //if(vm.score>=vm.workerCost)
          //{
            //vm.score=vm.score-vm.workerCost;
          //vm.workNum +=5;
            //totalWorkers +=5;
          //}
        }
        vm.BuildFarm = function()
        {
          svc.BuildFarm();
        }

        vm.TrainFarmers = function(_farm)
        {
            svc.TrainFarmers(_farm);
        }
        vm.AssignFarmersToAcre = function (_farm,_acre)
        {
          svc.AssignFarmersToAcre(_farm,_acre);
        }
        vm.BuildAcre = function(_farm)
        {
          svc.BuildAcre(_farm);
        }

        /* ======================================== Private Methods ======================================== */
        function init() {
          svc.Test();
          svc.BuildFarm();
          //svc.update(cmnSvc.$timeout());//start update
          cmnSvc.$timeout(svc.update, (intervalCheckTime*1000));
        }
        /*function update()
        {
          Consumtion();
          ProduceFood();
          cmnSvc.$timeout(update, (intervalCheckTime*1000));
        }
        function ProduceFood()
        {
          vm.maxFarmers = maxFarmersPerFarm*vm.farms.length;
          //vm.farmRate = farmRatePerFarm*vm.farms.length+(vm.farmers*farmerRatePerFarm);

          vm.food = vm.food + vm.farmRate;


        }
        function UpdateFarmRate()
        {
          vm.farmRate = 0;
          var farmRate_ = 0;
          for(let i=0; i<vm.farms.length; i++)
          {
            let farm = vm.farms[i];
            for(let i = 0; i<farm.acres.length; i++)
            {
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
            vm.farmRate += farmRate_;//+(vm.farmers/10);
          }
        }
        function Consumtion()
        {
          if(vm.food >100)
          {
            vm.consumption = consumtionRate * totalWorkers;
            vm.food = vm.food - vm.consumption;
          }else{
          //all workers but farmers stop working tell theres at least 100
          }

        }*/
        init();
    }
})();
