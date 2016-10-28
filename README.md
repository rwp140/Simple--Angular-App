#very basic stat game#
Built Fist as practise, and second as a simple minimal but still playable in concept game in, and to learn from, AngularJS.

## Discription ##
Of which starting from a given score value, the end user will be able given a thiefdom and the power to buy and upgrade property for verious purposes, farming, blacksmithing, arcitectural, and so on, Train and assing new workers to verious jobs to ultimatly create a better thiefdom. They will be combating the needs and moral of thier citizens, and the needs and consumption of its workers (where ever they may or may not be assigned to), working to be above the effect of the minimal failiure states. 

The game is built to a passive progreasion where the user, must work to provide enough surplus, food, resources, and money, to satisfy the works, and their rate of consumpte. Once a surplus falls to 100 unitys or bellow, all assigned works stop working and thusly stop consuming supplies built up to be used in there tasks, untill the supply has built up past 100. With this in mind citizen moral dips down the long A surplus is bellow the working value (100), and trade income will lower.

##features##
- The game is built to a passive progreasion. meaning the user at hand may walk away, and not lose progression, but will not be able to progress with out action. Further more will be able to progress faster, and easier, with more time invested.
- the goal is to maintain a high value self sustaining system. 
- The higher the system value the harder it should be to maintain.
- the player(the end user) may:
	- train works
		- with in availbe willing citizen count
		- Asign availble workers to verious jobs
		- each worker adds to the surplus food consumption rate
		- workers will only work from there relavtive jobs as long as the needed source, and food are above surplus limits (else base rates are applied untill then)
	- build farms;
		- upgrade thier quality
		- assign workers to be farmers
		- by more acres
		- number of farmers are limited by acre (by 5)
		- number of acres are limited by quality (by 50)
		- quality is limited to 3 levels, starting at one
		- these actions increase the rate of production and thusly the food supply surplus
	- foresty lodge 
		- quality level, from 1 to 5, decreases the cool down
		- number of foresters determins the rate of lumber gathered, per action
		- max work count of 15
		- may upgrade acre coverage to increase lumber produced per action, limited by the qualtiy level (5 acres coverage per level)
	- build lumber Mills (bonus)
		- which can be upgrade by quality, starting at 1, to 5
		- can have 5 members per level
		- and consume lumber supplies at a rate determing by mill laboures * quality
	- build quarries 
		- quality level increase size and production, starting from 1 - 3
		- size determins how much per action
		- while work count determins the cool down, how fast
		= produces stone
	- masons lodge (bonus)
		- masons produce brick, from consuming stone
		- higher quality improves rate, and work max count
		- moe masons(assigned workers) produce more brick per action
	- build architects
		- to be able to build new buildings faster
		- built buildings use supplies from verious surplus stockpiles
	- Atract citizens 
		- surplus supplies create surplus income
		- surplus income increase moral per 100 units
		- moral decreases when a supply is under 100 unitys by 1 unit ever full minor rotation (TBD: most likly a minute)
		- increased moral attract (moral/100) every 30 minor rotations
- the player Must
	- manage consumptionr rates
	- manage citizen moral rate
	- average maniciple income of the thiefdom

##Done##
- food consumption, rate by worker count
- food production, farm states by rate
- farm building
- farm: acre building
- worker to farmer assignment
- worker training
- these four actions take score
- stats mentioned above tracked

##TODO##
- farm upgrade function
- forestry lodge
- Quarry
- Achetects
- citizens
###Also###
-Discription (here), needs to be cleaned up, to be easier to read, clearer, more gramaticaly correct, and to correct spelling issues
-Functions need to be properly diversified into services, according to properly accepted linquistic paradigms of angularJS(how they and its following developers will prefer to see the code organizeds as.)
- TODO needs to eb expandid on
- Derective set up needs to eb further explored.
- code will need to be cleaned, and cleaned again

#based ON #
## AngularJS (1.x) Starting Template ##

### Introduction ###

This repository contains a scaffold for an AngularJS (1.x) app. This **CAN** be used within Ionic framework mobile apps. However, there are a few things that need to be modified. There are a lot more other than what is written below. Will update when there is time.

**Note:** This starting template follows heavily John Papa's style guide to make it extremely modular.

### What else are there in this repo? ###

1. AngularJS specific:
    
    - In **modules/core/components/common.service.js**
        - resetForm() - This will reset the form object (set $pristine to true & make the objects within the form be empty -> {})
        - goToPage(stateName, hasRoot, toReload, stateParam) - This will go to the state based on the statename. If you want to just reload the current page, only **toReload** has to be true. The rest of the input params can be undefined
        - getCurrentState() - This will return the current state's object
        - getStateParam() - This will return the current state's parameters (if any)
    - In **modules/core/components/events.service.js**
        - Here is where all broadcast events executor & listener are placed
    - In **modules/core/components/httpRequests.service.js**
        - http(...) - This will handle all HTTP calls for you. Refer to the source code for more information
2. Non AngularJS Specific (vanilla JS stuffs):
    
    - In **modules/core/components/common.service.js**
        - getDateInDDMMMMYYYY(dateTimeInEpoch) - This will return the date in string with the format: (dd MMMM yyyy). Eg: (02 January 2016)
        - isObjPresent(obj) - This is the equivalent of Rail's .present? method. For more info, check out the source code. The doc is there on what is supported and what isn't
        - getObjType(obj) - This will return the type of object in string (eg: 'function'). For more info, check out the source code. The doc is there on what is supported and what isn't
        - getUUID() - This will return a UUID. The algo is a fast UUID generator, RFC4122 version 4 compliant. For more info, check out the source code.
        - isEpochTimeInMs(epochTime) - Will return **true** if its in milliseconds & **false** if its in seconds. Will throw error if the input is neither milliseconds or seconds