function karmaSystem(api, args) {
	this.moduleData = args[0];
    this.moduleConfig = args[1];
    this.moduleConfig.Modules["Karma"].Version = this.Version;
    this.moduleConfig.Permissions.Karma = this.moduleConfig.Permissions.Karma || {
    	"kset": "canSetKarma",
        "kcheck": "canCheckKarma",
        "krem": "canRemKarma",
        "kadd": "canAddKarma"
    };
    this.moduleConfig.Karma = this.moduleConfig.Karma || {
        Modifier: 2,
        Messages: {
            modifyKarma: "You've {{mKarma}}",
            cmdMsg: "{{status}} {{type}} {{amt}} Karma {{player}}"
        },
        Settings: {
            AntiSleeperOn: false,
            PublicPromote: true
        }
    };
    command.AddChatCommand("ka", api, "karmaCmd");
};

karmaSystem.prototype = {

	OnPlayerInit: function(player) {
        var steamID = rust.UserIDFromPlayer(player);
        this.buildData(steamID);
    },

   	buildData: function(steamID) {
        this.moduleData.Karma.PlayerData[steamID] = this.moduleData.Karma.PlayerData[steamID] || {};
        this.moduleData.Karma.PlayerData[steamID].Karma = this.moduleData.Karma.PlayerData[steamID].Karma || {};
        API.saveData();
    },

    OnEntityDeath: function(entity, hitinfo) {
        var dh = API.deathHandler({
            victim: entity,
            killer: hitinfo.Initiator
        });
        if (dh) this.handleKarma(dh);
        return false;
    },

    handleKarma: function(dh) {
		var amt = (this.moduleData.Ranks) ? this.moduleData.Ranks.PlayerData[dh.victimID].Rank * this.moduleConfig.Karma.Modifier : Modifier;
    	if (this.moduleData.Karma.PlayerData[dh.victimID].Karma >= 0) {
    		this.moduleData.Karma.PlayerData[dh.killerID].Karma -= amt;
    		dh.killer.ChatMessage(this.moduleConfig.Karma.Messages.modifyKarma.replace("{{mKarma}}", "Lost " + amt.toString() + " Karma Point(s)"));
    	} else {
    		this.moduleData.Karma.PlayerData[dh.killerID].Karma += amt;
    		dh.killer.ChatMessage(this.moduleConfig.Karma.Messages.modifyKarma.replace("{{mKarma}}", "Gained " + amt.toString() + " Karma Point(s)"));
    	}
    },

    karmaCmd: function(player, cmd, args) {

    },

    //Add Punishment system
}

var Karma = {
	Title: "Karma",
    Author: "Killparadise",
    Version: V(1, 0, 0),
    Init: function() {
        print("Karma Installed. Please Reload ParaAPI");

    }
}