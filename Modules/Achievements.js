function AchievementsSystem(api, args) {
  this.RanksData = args[0];
  this.RanksConfig = args[1];

  this.RanksConfig.Achievements = this.RanksConfig.Achievements || {
    //types of Achievements: kills[type, amount], gathering[type, amount], building[[type, amount], [tier]], crafting[item, amount]
    earnablePrefixes: [{
      tag: "Hunter",
      description: "Get 25 Player Kills",
      kills: {type: ["player"], amount: 25}
    }, {
      tag: "Smelter",
      description: "Craft a furnace",
      crafting: {item: ["furnace"], amount: 1}
    }, {
      tag: "Hoarder",
      description: "Gather 100k of stone, wood, and metal ore",
      gathering: {type: ["stone", "wood", "metal_ore"], amount: 100000}
    }, {
      tag: "Architect",
      description: "Build a 10 piece Metal Home",
      building: {type: "Metal", amount: 10}
    }, {
      tag: "Newbie",
      description: "Upgrade a structure to wood",
      building: {tier: "wood"}
    }]
  };
}

AchievementsSystem.prototype = {

};

var Achievements = {
    Title: "Achievements Module",
    Author: "Killparadise",
    Version: V(1, 0, 0),
    Init: function() {
    print("Achievements Installed. Please Reload ParaAPI");

  }
}