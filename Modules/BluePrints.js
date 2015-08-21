function BluePrints(api, args) {
	this.moduleData = args[0];
    this.moduleConfig = args[1];
    this.moduleConfig.Modules["BluePrints"].Version = this.Version;
    this.moduleConfig.Permissions.BPs = this.moduleConfig.Permissions.BPs || {

    };
    this.moduleConfig.BPs = this.moduleConfig.BPs || {
        Settings: {
            maxLvl: 50,
            xpRate: 1
        },
        ExpRates: {
        	players: 300,
        	wolf: 100,
        	bear: 200,
        	building: {
        		wood: 2,
        		stone: 4,
        		metal: 6,
        		rMetal: 9
        	},
        	destroying: {
        		wood: 2,
        		stone: 4,
        		metal: 6,
        		rMetal: 9
        	},
        	crafting: {
        		weapons: {
        			aRifle: 10,
        			shotgun: 10,
        			rifle: 15

        		},
        		tools: {

        		}
        	}
        },
        ExpTakers: {
        	players: 4,
        	wolf: 2,
        	bear: 1,
        	suicide: 1,
        	other: 1
        },
        disabledXP: {},
        Messages: {
            test: "Test Message",
            lvl: "<color=lime>{slayer}</color> the <color={slayerColor}>{title}</color> has slain <color=lime>{slain}</color> the <color={slainColor}>{stitle}</color>!"
        },
        Permissions: {
            "wipe": "canWipe",
            "noadmin": "turnOffAdmins",
            "kset": "canSetKarma",
            "kcheck": "canCheckKarma",
            "krem": "canRemKarma",
            "kadd": "canAddKarma",
            "create": "canCreate",
            "delete": "canDelete",
        }
    };
    command.AddChatCommand("bp", api, "rankCmd");
}