(function() {
    'use strict';

    angular.module('SandCastle')
        .controller('sandCastleController', sandCastleController);

    sandCastleController.$inject = ['commonService', 'sandCastleService'];

    function sandCastleController(commonService, sandCastleService) {
        var vm = this;

        /* ======================================== Var ==================================================== */
        vm.misc = {castleName: "TEST1"};
        //TODO sort out and move the aporopait vars and methods (if not most or all of them) to sandCastleService
        const intervalCheckTime = 1;//eve x seconds
        const consumtionRate = 0.65;
        //TODO sort non constants into an object {key: value} system
        vm.score = 1750;
        vm.castleName = "château de sable";
        vm.workNum = 10;
        var totalWorkers = 10;
        vm.consumption = consumtionRate * totalWorkers;;
        vm.workCost = 100;//score
        vm.farms = [];// cost workers
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
        var acre = function()
        {
          this.farmers = 5;
          this.qualityLevel = 1;
        }
        vm.farmers = 0;// cost workers
        const maxFarmersPerFarm = 50;//per farm
        vm.maxFarmers = 50;//per farm
        const farmRatePerFarm = 5;//5 units of food per farm every interval 15 seconds
        const farmerRatePerFarm = 0.5;//5 units of food per farm every interval 15 seconds
        vm.farmRate = 0; //
        vm.farmCost = 250;//score
        vm.farmerCost = 50;//score
        vm.masons = 0;
        vm.food = 500;
        vm.MasonaryhouseCost = 500; //per craftsman house
        vm.maxMasons= 15;

        vm.castleArea = "Court";
        //TODO move to seperate service
        vm.showInfoBool= true;
        vm.showBTNText = "show";
        vm.showText = ">";
        /* ======================================== Services =============================================== */
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
          if(vm.score>=vm.workCost)
          {
            vm.score=vm.score-vm.workCost;
            vm.workNum +=5;
            //totalWorkers +=5;
          }
        }
        vm.BuildFarm = function()
        {
          if(vm.score>=vm.farmCost && vm.farmers < vm.maxFarmers && vm.workNum >= 5)
          {
            vm.score=vm.score-vm.farmCost;
            var _farm = new FarmObject();
            vm.farms.push(_farm);//value:"farm"});//new vm.farm());// cost workers
            vm.farms[vm.farms.length-1].AddAcre();
            vm.workNum -=5;
            vm.farmers +=5;//keeps track of total
          }
          UpdateFarmRate();
        }
        vm.TrainFarmers = function(_farm)
        {
          if(vm.farmers < vm.maxFarmers && vm.score>=vm.farmerCost && vm.workNum > 0)
          {
            vm.score=vm.score-vm.farmerCost;
            vm.workNum --;
            vm.farmers ++;//adds to total
            _farm.farmers ++;
            _farm.unAssignedFarmers ++;
          }
          UpdateFarmRate();
        }
        vm.AssignFarmersToAcre = function (_farm,_acre)
        {
          if(_farm.unAssignedFarmers >0)
          {
            _farm.farmers --;
            _farm.unAssignedFarmers --;
            _acre.farmers ++;
          }
          UpdateFarmRate();
        }
        vm.BuildAcre = function(_farm)
        {
          if(_farm.unAssignedFarmers >= 5)
          {
            _farm.AddAcre();
          }
          UpdateFarmRate();
        }
        /* ======================================== Private Methods ======================================== */
        function init() {
          vm.BuildFarm();
          update()//start update
        }
        function update()
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
          var farmRate = 0;
          for(var farm of vm.farms)
          {
            for(var acre of farm.acres)
            {
              console.log("acre.qualityLevel "+acre.qualityLevel);
              console.log("acre.farmers "+acre.farmers);
              farmRate +=acre.qualityLevel*acre.farmers;
              console.log("farm rate "+farmRate);
            }
            console.log("acres "+farm.acres.length );
            console.log("farm.qualityLevel "+farm.qualityLevel);
            farmRate +=  (farm.acres.length * ((farm.qualityLevel)/2));
            console.log("farm rate "+farmRate);
            vm.farmRate += farmRate;//+(vm.farmers/10);
          }
        }
        function Consumtion()
        {
          if(vm.food >100)
          {
            vm.consumption = consumtionRate * totalWorkers;
            vm.food = vm.food - vm.consumption;
          }else{``
          //all workers but farmers stop working tell theres at least 100
          }

        }
        init();
    }
})();
